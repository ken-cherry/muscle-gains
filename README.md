# This is a React SPA Application

# Technologies used to build this app:

- Vite
- React Router DOM Libraries
- Tailwind CSS
- Daisyui
- React Icons
- Hero Icons

# Purpose of building this application.

- Add project to my developer portfolio.
- Reinforce my Tailwind CSS skills.
- Practice my React Router DOM skills.
- Practice error handling skills.

# Launch project in your preferred IDE

```sh
npm install
```

- spin up dev server

```sh
npm run dev
```

{validIncludes.map((item, index) => {
return (
<li key={item} className="flex gap-x-3">
<CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
{item}
{index < validIncludes.length - 1 ? "," : ""}
</li>
);
})}
