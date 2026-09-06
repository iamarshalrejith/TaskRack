# TaskRack

A minimal, cross-platform to-do app built with Expo (React Native) and Convex as a real-time backend. Todos sync instantly across devices — add, edit, complete, or delete a task and every connected client updates live.

## Features

- ✅ Create, edit, complete, and delete todos
- ⚡ Real-time sync via Convex — no manual refresh or polling
- 🌗 Light/dark theme with persisted preference (AsyncStorage)
- 📊 Progress stats (completed vs. total tasks)
- 🧹 "Danger zone" to clear all todos at once
- 📱 Runs on iOS, Android, and web from a single codebase
- 🗂️ File-based routing via Expo Router, with a tab layout (Home / Settings)

## Tech Stack

- [Expo](https://expo.dev) / [Expo Router](https://docs.expo.dev/router/introduction/) — app shell and navigation
- [React Native](https://reactnative.dev) 0.81 + React 19
- [Convex](https://www.convex.dev) — real-time database, queries, and mutations
- TypeScript
- `expo-linear-gradient`, `@expo/vector-icons` for UI
- `@react-native-async-storage/async-storage` for local theme persistence

## Project Structure

```
app/
  _layout.tsx            # Root layout
  (tabs)/
    _layout.tsx          # Tab navigator
    index.tsx            # Home screen — todo list
    settings.tsx         # Settings screen
components/
  Header.tsx
  TodoInput.tsx
  EmptyState.tsx
  LoadingSpinner.jsx
  ProgressStats.tsx
  Preferences.tsx
  DangerZone.tsx
hooks/
  useTheme.tsx           # Theme context (light/dark) + persistence
assets/
  styles/                # Style factories (theme-aware)
  images/
convex/
  schema.ts              # Database schema
  todos.ts               # Queries & mutations (CRUD)
```

## Prerequisites

- Node.js (LTS recommended)
- npm
- [Expo Go](https://expo.dev/go) app (for testing on a physical device), or an Android/iOS simulator
- A free [Convex](https://www.convex.dev) account (for the backend)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up Convex**

   ```bash
   npx convex dev
   ```

   This logs you into Convex, creates/links a project, and starts syncing the schema and functions in `convex/`. It generates a deployment URL and wires it into your local environment automatically.

3. **Start the app**

   ```bash
   npx expo start
   ```

   From the Expo CLI output you can open the app in:
   - a [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - an [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

   Keep `npx convex dev` running alongside `npx expo start` during development so backend changes sync live.

## Data Model

A single `todos` table:

| Field         | Type    | Description             |
|---------------|---------|--------------------------|
| `text`        | string  | Todo content             |
| `isCompleted` | boolean | Completion status        |

## Available Convex Functions (`convex/todos.ts`)

| Function        | Type     | Description                              |
|-----------------|----------|-------------------------------------------|
| `getTodos`      | query    | Fetch all todos, newest first             |
| `addTodo`       | mutation | Create a new todo                         |
| `toggleTodo`    | mutation | Toggle a todo's completion status         |
| `updateTodo`    | mutation | Edit a todo's text                        |
| `deleteTodo`    | mutation | Delete a single todo                      |
| `clearAllTodos` | mutation | Delete every todo, returns deleted count  |

## Scripts

| Command                 | Description                              |
|--------------------------|-------------------------------------------|
| `npm run start`         | Start the Expo dev server                 |
| `npm run android`       | Start and open on Android                 |
| `npm run ios`           | Start and open on iOS                     |
| `npm run web`           | Start and open in the browser             |
| `npm run lint`          | Run ESLint                                |
| `npm run reset-project` | Reset to a blank starter app (see below)  |

## Resetting to a Blank Project

If you want to start development from scratch using this repo as a template:

```bash
npm run reset-project
```

This moves the current app code to `app-example/` and creates a fresh, blank `app/` directory.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Convex documentation](https://docs.convex.dev/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
