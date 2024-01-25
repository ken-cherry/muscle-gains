# This is a React SPA Application

# Technologies used to build this app:

- Vite
- React Router DOM Libraries
- Tailwind CSS
- React Icons

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

<nav>
      <div className="nav-center">
        <span>Muscle Gains</span>
        <div className="nav-links">
          {navigation.map((item) => {
            const { id, to, text } = item;
            return (
              <NavLink to={to} className="nav-link" key={id}>
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
