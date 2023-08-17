import { RecipeHomeContainer } from "ui/components/RecipeHome/RecipeHomeContainer";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {
  Database,
  Recipe,
  RecipeProject,
  UserTemplatePreview,
} from "types/database";
import { redirect } from "next/navigation";
import { getProjectSplit } from "ui/utils/main";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    sessionId?: string;
    recipeId?: string;
  };
}) {
  const { sessionId, recipeId } = searchParams;

  if (recipeId == null && sessionId) {
    redirect("/");
  }

  const supabase = createServerComponentClient<Database>({
    cookies,
  });

  const projectRes = await supabase.from("project").select();
  const { globalProjects, userProjects } = getProjectSplit(
    (projectRes.data || []) as RecipeProject[]
  );

  let recipe: null | Recipe = null;

  if (recipeId) {
    const response = recipeId
      ? await supabase.from("recipe").select().eq("id", recipeId).single()
      : null;

    if ((response && response.error) || !response?.data) {
      redirect("/");
      return;
    }

    recipe = response.data as Recipe;
    const { data: userData } = await supabase.auth.getUser();

    if (userData.user) {
      const {
        data: templateRes,
        error,
        statusText,
      } = await supabase
        .from("template_public_view")
        .select(
          "id, created_at, title, description, original_author, recipe, visibility, alias, author_id"
        )
        .eq("author_id", userData.user.id)
        .eq("recipe_id", recipeId);

      if (!error && templateRes && templateRes.length > 0) {
        recipe.userTemplates = (templateRes as UserTemplatePreview[]).reverse();
      }
    }
  }

  return (
    <RecipeHomeContainer
      globalProjects={globalProjects}
      projects={userProjects}
      recipe={recipe || undefined}
      sessionId={sessionId}
    />
  );
}
