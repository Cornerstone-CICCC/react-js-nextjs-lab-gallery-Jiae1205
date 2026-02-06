[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/eMNlNptQ)
# React JS - NextJS Lab Day Gallery

**Goal:** Create a private gallery site using NextJS with user login.

[https://drive.google.com/file/d/1EzA-drpeSJQj3Df30huIYTYuGLpmlcZn/view?usp=sharing]

## Instructions ✅

1. Create a NextJS project by running `npx create-next-app@latest`. Name your app **nextjs-gallery**.
2. Make sure to use App Router for the project.
3. Create a login route called `/login` which will contain a simple form with just a **Username** input field and **Log In** button.
4. Clicking on the login button should trigger a Server Action or API route (you choose) which will store the username in a cookie called `gallery-user`. For example:

    ```ts
    response.cookies.set({
        name: 'gallery-user',
        value: username,
        httpOnly: true,
        maxAge: 10 * 60, // 10 minutes
    });
    ```

5. Once cookie is set, redirect the user to the gallery page.
6. Create a route called `/gallery`. The gallery page is only accessible if you have the `gallery-user` cookie. You can check if this cookie exist using a Server Action/Function.
7. Create a navigation component so that it is easier to switch between your home and gallery page. Use `<Link></Link>` component from 'next/link' instead of `<a></a>`.
8. Fetch the photos from `https://jsonplaceholder.typicode.com/photos` and display the **thumbnails** using their `thumbnailUrl` property in the gallery page. Please take note if the placeholder images are not working or broken, make sure to replace them with `https://placehold.co` images *(SEE MORE INFO AT THE BOTTOM OF README FILE)*.
9. Each image should be clickable. Create a dynamic route for the photo detail page.
10. Clicking on an image will open a modal created using a `Parallel` and `Intercepting` route.
11. Refreshing the page while the modal is open should load the actual photo detail page route.
12. Commit and push your changes once you are done.

### Important Notes 📝

- Use TailwindCSS classes to style your elements. No need to spend too much time on the design as long as it is presentable.
- Use the `<Image />` component from 'next/image' to display an image. Do **NOT** use `<img>`. Here is the link to their documentation [https://nextjs.org/docs/app/api-reference/components/image].
- Make sure to replace the code inside your `next.config.ts` file with the code below. You need to do this so that you can use `<Image />` with the images provided by `jsonplaceholder.typicode.com`:

    ```js
    import type { NextConfig } from 'next'
     
    const nextConfig: NextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
            port: '',
            pathname: '**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'placehold.co',
            port: '',
            pathname: '**',
            search: '',
          },
        ],
      },
    }
     
    export default nextConfig
    ```

    You can read more about this in their [documentation](https://nextjs.org/docs/app/getting-started/images#remote-images).

- If the jsonplaceholder images are not loading, you need to use `.map()` to rebuild the photo object and replace the `url` and `thumbnailUrl` of every photo. Like so:

    ```ts
    const res = await fetch(“https://jsonplaceholder.typicode.com/photos”)
    const data = await res.json()
    
    const photos = data.map(p => {
        …p,
        url: "https://placehold.co/600.png",
        thumbnailUrl: "https://placehold.co/150.png"
    })
    ```

## Resources

- For all photos: [https://jsonplaceholder.typicode.com/photos]
- For individual photos by id: [https://jsonplaceholder.typicode.com/photos/1]

---

*Congratulations on finishing React course! 🎉🎉🎉*
