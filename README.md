# CodeClarity AI

> Understand. Debug. Improve. Ship.

CodeClarity AI is a developer-focused AI code analysis workspace built with Next.js, TypeScript and Monaco Editor. It analyzes source code, surfaces issues, explains complexity, generates refactors and tests, produces documentation, and supports contextual chat about the current code.

## Features

- Monaco-based code editor with 11 language modes
- Structured AI analysis: summary, heuristic quality signal, findings, issues, line explanations and complexity
- Issue severity and line navigation
- Refactor generation without overwriting the original source
- Framework-aware unit-test generation
- Developer documentation generation
- Code-grounded AI chat
- Built-in examples
- Local browser history
- Dark/light themes
- Responsive IDE-style layout
- Zod validation for request and model output boundaries
- Provider-independent server-side AI integration; credentials are never sent to the browser
- No submitted code is executed

## Architecture

The browser owns the editor and presentation state. Next.js App Router Route Handlers provide the server boundary for AI calls. Each major AI operation has a separate server-side function and prompt. Structured analysis responses are validated before rendering.

```text
Browser / Monaco
      |
      v
Next.js Route Handler
      |
      +--> input validation (Zod)
      |
      +--> focused AI operation
      |       - analyze
      |       - refactor
      |       - tests
      |       - documentation
      |       - chat
      |
      v
Groq API through its OpenAI-compatible Chat Completions interface
      |
      v
validated response --> UI visualization
```

## Tech stack

- Next.js + React: full-stack App Router application and server route handlers.
- TypeScript: typed application boundaries and domain models.
- Tailwind-style component system: compact local UI primitives following shadcn/ui conventions without adding a large component dependency.
- Lucide: consistent interface icons.
- Monaco Editor: production-grade code editing and language modes.
- Groq-only server-side AI analysis and generation.
- AI provider: Groq only.
- Zod: request and structured-response validation.
- Vitest: focused unit tests.
- ESLint + Prettier: code quality and formatting.

## Project structure

```text
app/
  api/
    analyze/route.ts
    chat/route.ts
  analyze/page.tsx
  docs/page.tsx
  history/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  code-workspace.tsx
  site-nav.tsx
  ui/
lib/
  ai.ts
  examples.ts
  prompts.ts
  utils.ts
tests/
types/
```

## Getting started

### Requirements

- Node.js 20.9+
- A Groq API key

### Installation

```bash
npm install
cp .env.example .env.local
```

Configure Groq in `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=openai/gpt-oss-20b
```

The application is intentionally Groq-only to keep the portfolio architecture focused and easy to operate.

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production

```bash
npm run build
npm run start
```

### Quality checks

```bash
npm run lint
npm run test
```

## How AI analysis works

The initial analysis is intentionally separate from refactoring, testing and documentation. The server supplies the selected language and source as data, asks the model for a strict structured response, then validates that response against a Zod schema. Follow-up actions use their own focused prompts and schemas. Chat includes the current source, language and any available prior analysis so it stays grounded in the active workspace.

The quality score is explicitly presented as an AI-generated heuristic. Complexity includes a confidence level, and the prompts tell the model not to claim certainty when the source does not support it.

## Security considerations

- AI credentials are read only on the server from environment variables.
- The server-side Groq client uses Groq’s OpenAI-compatible API interface without exposing credentials to the browser.
- Uploaded files are read as text; the application never executes user code.
- File type and file size are validated in the browser; server requests have a 50,000-character source limit.
- Source code is treated as untrusted input. The AI prompts explicitly instruct the model not to follow instructions embedded in source code.
- API failures return human-readable errors without exposing internal stack traces.
- Do not commit `.env` or `.env.local`.

## Supported languages

JavaScript, TypeScript, Python, Java, C++, C, C#, Go, Rust, PHP and SQL.

## Future improvements

- Repository-level multi-file analysis with chunking and embeddings
- Authentication and cloud history
- GitHub repository import with permission-scoped access
- Static-analysis adapters for language-specific linters
- Streaming analysis events
- Evaluation harness for measuring AI finding precision/recall against curated fixtures
- Usage metering and rate limiting backed by a durable store

## Contributing

Open an issue for a focused change, then submit a pull request with tests for behavior that crosses a validation or application boundary.

## License

MIT. See `LICENSE`.

## Resume Project

This project demonstrates full-stack TypeScript architecture, server-side API security, structured LLM integration, schema validation, Monaco editor integration, responsive developer-tool UX, contextual AI state management, error handling, and automated tests.
