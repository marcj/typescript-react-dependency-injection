# React + Deepkit + Vite

<div align="center">
    <img src="https://github.com/deepkit/deepkit-framework/raw/master/media/deepkit_logo.svg#gh-dark-mode-only" width="192" />
    <img src=".https://github.com/deepkit/deepkit-framework/raw/master/media/deepkit_logo_dark.svg#gh-light-mode-only" width="192" />
</div>

For the first time, you can use full-featured Dependency Injection Container in React
based on TypeScript types. No decorators, no magic strings, no extensive boilerplate.

```tsx
import { ProviderWithScope, ServiceContainer } from "@deepkit/injector";
import { Logger } from "./logger.ts";

const providers: ProviderWithScope[] = [
    Logger,
    { provide: User, useValue: new User('anonymous') },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ServiceContainer providers={providers}>
            <App/>
        </ServiceContainer>
    </React.StrictMode>,
)

// in your components you can inject all providers, either reference a class or interface
function App(props: object, logger: Logger, user: User) {
    return (
        <>
            <button onClick={() => logger.log('Hi there')}>Log message</button>
            <div>Current user: {user.name}</div>
        </>
    );
}
```

## Try this repository

```sh
git clone https://github.com/marcj/typescript-react-dependency-injection
cd typescript-react-dependency-injection
npm install
npm run dev
```

## How to use

You want to use this in your project? Here is how:

```sh
npm install --save-dev @deepkit/type-compiler @deepkit/vite
npm install @deepkit/injector @deepkit/type
```

In your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { deepkitType } from "@deepkit/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), deepkitType()],
})
```

Instead of vite, you can also use the regular TypeScript compiler.
This should work out of the box, but see
https://docs.deepkit.io/english/runtime-types.html#runtime-types-installation for more information.

Esbuild is not supported yet, but will be soon.

Enable reflection (runtime type information from Deepkit).

```json
{
  "compilerOptions": {
    //...
  },
  "reflection": true
}
```

Done. Now you can use the `@deepkit/injector` package in your main file.

```tsx
import { ProviderWithScope, ServiceContainer } from "@deepkit/injector";
import { Logger } from "./logger.ts";

// all these providers are available in your whole application
// by simply defining them in your function signature.
const providers: ProviderWithScope[] = [
    Logger,
    { provide: User, useValue: new User('anonymous') },
];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ServiceContainer providers={providers}>
            <App/>
        </ServiceContainer>
    </React.StrictMode>,
);
```

In all your components (functional or classes based) you can now inject all providers.
You can either reference the class directly or interfaces.

```tsx
export function App(props: {}, auth: Auth, logger: Logger) {
    return (
        <>
            <button onClick={() => logger.log('Hi there')}>Log message</button>
            <div>Current user: {auth.user.name}</div>
        </>
    );
}
```

See https://docs.deepkit.io/english/dependency-injection.html for more information.

## How it works

Deepkit Type Compiler is a TypeScript compiler plugin that generates metadata for
all classes, interfaces, enums, and functions. This metadata is used by the
`@deepkit/injector` package to create a dependency injection container.

## Why

Dependency Injection is a great way to structure your application. It allows you
to write testable code, and it makes it easy to replace dependencies with mocks
or other implementations without maintaining your own registry of dependencies
or adjusting all code that uses them.

