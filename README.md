# CodeClarity AI

> Understand. Debug. Improve. Ship.

CodeClarity AI is a developer-focused AI code analysis workspace built with Next.js, TypeScript and Monaco Editor. It analyzes source code, surfaces issues, explains complexity, generates refactors and tests, produces documentation, and supports contextual chat about the current code.



## Live Demo

Try it live: [https://claritycode.netlify.app/](https://claritycode.netlify.app/)



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



## Technologies Used

- **Next.js + React** – full-stack App Router applicationand server route handlers
- **TypeScript** – typed application boundariesand domain models
- **Tailwind-style component system** – compact local UI primitives following shadcn/ui conventions
- **Lucide** – consistent interface icons
- **Monaco Editor** – production-grade code editingand language modes
- **Groq** – server-side AI analysisand generation (OpenAI-compatible interface)
- **Zod** – request and structured-response validation
- **Vitest** – focused unit tests
- **ESLint + Prettier** – code qualityand formatting



## How to Use

1. **Open the app** – visit [https://claritycode.netlify.app/](https://claritycode.netlify.app/) or run it locally.
2. **Write or paste code** – use the Monaco editor, or load one of the built-in examples.
3. **Run analysis** – get a structured summary, quality signal, findings, issuesand complexity with severity levelsand line navigation.
4. **Take action** – generate refactors (original source is preserved), framework-aware unit tests, or developer documentation.
5. **Chat about your code** – ask contextual questions grounded in the current source.



### Supported Languages

JavaScript, TypeScript, Python, Java, C++, C, C#, Go, Rust, PHPand SQL.



## How AI Analysis Works

The initial analysis is intentionally separate from refactoring, testingand documentation. The server supplies the selected languageand source as data, asks the model for a strict structured response, then validates that response against a Zod schema. Follow-up actions use their own focused promptsand schemas. Chat includes the current source, languageand any available prior analysis so it stays grounded in the active workspace.

The quality score is explicitly presented as an AI-generated heuristic. Complexity includes a confidence level, and the prompts tell the model not to claim certainty when the source does not support it.



## Future Enhancements

- Repository-level multi-file analysis with chunkingand embeddings
- Authenticationand cloud history
- GitHub repository import with permission-scoped access
- Static-analysis adapters for language-specific linters
- Streaming analysis events
- Evaluation harness for measuring AI finding precision/recall against curated fixtures
- Usage meteringand rate limiting backed by a durable store
