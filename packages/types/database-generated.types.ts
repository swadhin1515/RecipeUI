export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      project: {
        Row: {
          created_at: string | null
          description: string
          id: number
          image: string | null
          owner_id: string | null
          project: string
          scope: Database["public"]["Enums"]["projectscope"]
          status: Database["public"]["Enums"]["recipeprojectstatus"]
          subheader: string | null
          tags: string[] | null
          title: string
          visibility: Database["public"]["Enums"]["projectvisibility"]
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          image?: string | null
          owner_id?: string | null
          project: string
          scope?: Database["public"]["Enums"]["projectscope"]
          status?: Database["public"]["Enums"]["recipeprojectstatus"]
          subheader?: string | null
          tags?: string[] | null
          title: string
          visibility?: Database["public"]["Enums"]["projectvisibility"]
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          image?: string | null
          owner_id?: string | null
          project?: string
          scope?: Database["public"]["Enums"]["projectscope"]
          status?: Database["public"]["Enums"]["recipeprojectstatus"]
          subheader?: string | null
          tags?: string[] | null
          title?: string
          visibility?: Database["public"]["Enums"]["projectvisibility"]
        }
        Relationships: [
          {
            foreignKeyName: "project_owner_id_fkey"
            columns: ["owner_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "project_owner_id_fkey"
            columns: ["owner_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          }
        ]
      }
      project_member: {
        Row: {
          created_at: string
          id: number
          project: string
          role: Database["public"]["Enums"]["projectmemberrole"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          project: string
          role?: Database["public"]["Enums"]["projectmemberrole"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          project?: string
          role?: Database["public"]["Enums"]["projectmemberrole"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_member_project_fkey"
            columns: ["project"]
            referencedRelation: "project"
            referencedColumns: ["project"]
          },
          {
            foreignKeyName: "project_member_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "project_member_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          }
        ]
      }
      recipe: {
        Row: {
          auth: string | null
          author_id: string | null
          created_at: string | null
          id: number
          method: Database["public"]["Enums"]["recipemethod"]
          options: Json | null
          path: string
          project: string
          queryParams: Json | null
          rank: number | null
          requestBody: Json | null
          summary: string
          tags: string[] | null
          templates: Json[] | null
          title: string
          urlParams: Json | null
          visibility: Database["public"]["Enums"]["visibility"]
        }
        Insert: {
          auth?: string | null
          author_id?: string | null
          created_at?: string | null
          id?: number
          method?: Database["public"]["Enums"]["recipemethod"]
          options?: Json | null
          path: string
          project: string
          queryParams?: Json | null
          rank?: number | null
          requestBody?: Json | null
          summary: string
          tags?: string[] | null
          templates?: Json[] | null
          title: string
          urlParams?: Json | null
          visibility?: Database["public"]["Enums"]["visibility"]
        }
        Update: {
          auth?: string | null
          author_id?: string | null
          created_at?: string | null
          id?: number
          method?: Database["public"]["Enums"]["recipemethod"]
          options?: Json | null
          path?: string
          project?: string
          queryParams?: Json | null
          rank?: number | null
          requestBody?: Json | null
          summary?: string
          tags?: string[] | null
          templates?: Json[] | null
          title?: string
          urlParams?: Json | null
          visibility?: Database["public"]["Enums"]["visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "recipe_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recipe_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recipe_project_fkey"
            columns: ["project"]
            referencedRelation: "project"
            referencedColumns: ["project"]
          }
        ]
      }
      template: {
        Row: {
          alias: string
          author_id: string
          created_at: string
          description: string
          id: number
          original_author_id: string | null
          project: string
          queryParams: Json | null
          recipe_id: number
          replay: Json | null
          requestBody: Json | null
          title: string
          urlParams: Json | null
          visibility: Database["public"]["Enums"]["visibility"]
        }
        Insert: {
          alias: string
          author_id: string
          created_at?: string
          description: string
          id?: number
          original_author_id?: string | null
          project: string
          queryParams?: Json | null
          recipe_id: number
          replay?: Json | null
          requestBody?: Json | null
          title: string
          urlParams?: Json | null
          visibility?: Database["public"]["Enums"]["visibility"]
        }
        Update: {
          alias?: string
          author_id?: string
          created_at?: string
          description?: string
          id?: number
          original_author_id?: string | null
          project?: string
          queryParams?: Json | null
          recipe_id?: number
          replay?: Json | null
          requestBody?: Json | null
          title?: string
          urlParams?: Json | null
          visibility?: Database["public"]["Enums"]["visibility"]
        }
        Relationships: [
          {
            foreignKeyName: "template_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_original_author_id_fkey"
            columns: ["original_author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_original_author_id_fkey"
            columns: ["original_author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_project_fkey"
            columns: ["project"]
            referencedRelation: "project"
            referencedColumns: ["project"]
          },
          {
            foreignKeyName: "template_recipe_id_fkey"
            columns: ["recipe_id"]
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "template_recipe_id_fkey"
            columns: ["recipe_id"]
            referencedRelation: "recipe_view"
            referencedColumns: ["id"]
          }
        ]
      }
      template_fork: {
        Row: {
          created_at: string
          id: number
          new_author_id: string
          new_template: number
          original_author_id: string
          original_template: number
        }
        Insert: {
          created_at?: string
          id?: number
          new_author_id: string
          new_template: number
          original_author_id: string
          original_template: number
        }
        Update: {
          created_at?: string
          id?: number
          new_author_id?: string
          new_template?: number
          original_author_id?: string
          original_template?: number
        }
        Relationships: [
          {
            foreignKeyName: "template_fork_new_author_id_fkey"
            columns: ["new_author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_fork_new_author_id_fkey"
            columns: ["new_author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_fork_original_author_id_fkey"
            columns: ["original_author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_fork_original_author_id_fkey"
            columns: ["original_author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user: {
        Row: {
          company: string | null
          created_at: string
          email: string
          first: string
          hear_about: string | null
          last: string
          onboarded: boolean
          place: number
          profile_pic: string | null
          tier: string
          use_case: string | null
          user_id: string
          username: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          first: string
          hear_about?: string | null
          last: string
          onboarded?: boolean
          place?: number
          profile_pic?: string | null
          tier?: string
          use_case?: string | null
          user_id: string
          username: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          first?: string
          hear_about?: string | null
          last?: string
          onboarded?: boolean
          place?: number
          profile_pic?: string | null
          tier?: string
          use_case?: string | null
          user_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      recipe_view: {
        Row: {
          auth: string | null
          author_id: string | null
          created_at: string | null
          id: number | null
          method: Database["public"]["Enums"]["recipemethod"] | null
          options: Json | null
          path: string | null
          project: string | null
          project_scope: Database["public"]["Enums"]["projectscope"] | null
          queryParams: Json | null
          rank: number | null
          requestBody: Json | null
          summary: string | null
          tags: string[] | null
          tags_count: number | null
          templates: Json[] | null
          title: string | null
          urlParams: Json | null
          visibility: Database["public"]["Enums"]["visibility"] | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recipe_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recipe_project_fkey"
            columns: ["project"]
            referencedRelation: "project"
            referencedColumns: ["project"]
          }
        ]
      }
      template_view: {
        Row: {
          alias: string | null
          author_id: string | null
          created_at: string | null
          description: string | null
          id: number | null
          original_author: Json | null
          original_author_id: string | null
          project: string | null
          project_scope: Database["public"]["Enums"]["projectscope"] | null
          queryParams: Json | null
          recipe: Json | null
          recipe_id: number | null
          replay: Json | null
          requestBody: Json | null
          title: string | null
          urlParams: Json | null
          visibility: Database["public"]["Enums"]["visibility"] | null
        }
        Relationships: [
          {
            foreignKeyName: "template_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_original_author_id_fkey"
            columns: ["original_author_id"]
            referencedRelation: "user"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_original_author_id_fkey"
            columns: ["original_author_id"]
            referencedRelation: "user_view"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "template_project_fkey"
            columns: ["project"]
            referencedRelation: "project"
            referencedColumns: ["project"]
          },
          {
            foreignKeyName: "template_recipe_id_fkey"
            columns: ["recipe_id"]
            referencedRelation: "recipe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "template_recipe_id_fkey"
            columns: ["recipe_id"]
            referencedRelation: "recipe_view"
            referencedColumns: ["id"]
          }
        ]
      }
      user_view: {
        Row: {
          first: string | null
          last: string | null
          profile_pic: string | null
          user_id: string | null
          username: string | null
        }
        Insert: {
          first?: string | null
          last?: string | null
          profile_pic?: string | null
          user_id?: string | null
          username?: string | null
        }
        Update: {
          first?: string | null
          last?: string | null
          profile_pic?: string | null
          user_id?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      projectmemberrole: "owner" | "editor" | "viewer"
      projectscope: "personal" | "team" | "global"
      projectvisibility: "private" | "public" | "unlisted"
      recipemethod: "GET" | "POST" | "PUT" | "DELETE"
      recipeprojectstatus: "Active" | "Install" | "Waitlist" | "Soon"
      visibility: "private" | "public" | "unlisted"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
