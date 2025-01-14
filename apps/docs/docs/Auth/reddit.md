---
sidebar_label: Reddit
---

# Reddit    

:::caution

**Official Docs**: https://www.reddit.com/dev/api/

**Time to get API Key:** 15 min (This one is brutal…)

**Last updated:** Aug 9, 2023

**Written by:**  [RecipeUI](https://recipeui.com/)

:::

### Step 1
Login to Reddit and go to https://www.reddit.com/prefs/apps to create an app.

- Choose **script** as your app type. This will make testing the Reddit API easier.
- You can set the redirect url as http://localhost:3000/ for testing purposes.
![Website](@site/static/img/guides/reddit1.png)

### Step 2
Find your App ID and Secret Key
![Get_Api_Key](@site/static/img/guides/reddit2.png)

### Step 3
**Bear with us, this next step requires the use of the terminal / CMD prompt, but we will have a one click button to get this eventually.**

Run the following request in your terminal to get your API key (bearer token).

There are 4 parts you need to replace:

- `YourRedditUsername` with your username
- `YourRedditPassword` with password.
- `AppID` From what you got in Step 2
- `SecretKey` From what you got in Step 3

```bash
curl --location 'https://www.reddit.com/api/v1/access_token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'username=**YourRedditUsername**' \
--data-urlencode 'password=**YourRedditPassword**' \
--user '**************AppID**************:**************SecretKey**************'
```

The output should be a very long bearer access token (your API key). Copy this key and save it somewhere secure.
![Terminal](@site/static/img/guides/reddit3.png)

### Step 4
You’re done! Start testing out Reddit’s API by navigating to https://recipeui.com/Reddit and entering in your bearer access token (API key).
![Corner](@site/static/img/guides/reddit4.gif)

:::tip

Please star our [repo](https://github.com/RecipeUI/RecipeUI) if you found this guide helpful!

:::