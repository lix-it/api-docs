# For AI Agents

These docs are also served over **SSH** at `lix.sh` so AI coding agents
(Claude, Codex, Cursor, etc.) can explore them with the bash commands they
already know — `ls`, `cat`, `grep`, `find`, `tree` — without needing an MCP
server, RAG pipeline, or copy-pasted context window.

The server is [OpenLore](https://github.com/aakarim/go-openlore), an
in-memory, read-only bash interpreter over SSH. It's safe to point any agent
at — no process execution, no network egress, no shell injection.

## Connect

```shell
# Get a shell
ssh lix.sh

# Or run a single command (recommended for agents)
ssh lix.sh "tree -L 2 /"
ssh lix.sh "cat /index.md"
ssh lix.sh "grep -ri 'email' /api"
ssh lix.sh "cat /api/contact.md"
```

No SSH key required — the server allows keyless connections for read access.

## What's available

The same content you see in this reference is laid out as a small filesystem:

```text
/
├── README.md               quick start
├── index.md                introduction + auth
└── api/
    ├── lix_account.md      accounts & credit balances
    ├── account.md          managed accounts
    ├── disambiguation.md   entity disambiguation
    ├── enrichment.md       profile & company enrichment
    ├── activity.md         activity endpoints
    ├── linkedin.md         direct LinkedIn endpoints
    ├── lookc.md            Lookc agent endpoints
    ├── ai.md               AI endpoints
    ├── contact.md          contact / email lookup
    └── errors.md           error reference
```

## Useful commands for agents

```shell
# Discover the API surface
ssh lix.sh "ls /api"

# Find the endpoint that does what you need
ssh lix.sh "grep -rli 'company' /api"
ssh lix.sh "grep -rn 'POST https' /api"

# Pull just the relevant section into context
ssh lix.sh "sed -n '/## Email from LinkedIn profile/,/^## /p' /api/contact.md"

# Find all rate-limit / error info
ssh lix.sh "grep -rn -A2 'Rate' /api"
ssh lix.sh "cat /api/errors.md"
```

## Telling your agent about lix.sh

Add a one-liner to your agent's instructions (e.g. `AGENTS.md`,
`CLAUDE.md`, or your system prompt):

```text
For Lix API reference, query the docs over SSH:
    ssh lix.sh "tree -L 2 /"
    ssh lix.sh "cat /api/<endpoint>.md"
    ssh lix.sh "grep -rli <keyword> /api"
No key required. Read-only, in-memory bash — safe to call from tools.
```

## Programmatic access

If you'd rather not shell out, you can also:

- **MCP** — `ssh lix.sh` exposes an MCP-compatible interface via the
  [OpenLore MCP server](https://github.com/aakarim/go-openlore#mcp).
- **SFTP / sshfs** — mount the docs as a local filesystem:

    ```shell
    mkdir -p /mnt/lix-docs
    sshfs lix.sh:/ /mnt/lix-docs -o ro
    grep -r "credit" /mnt/lix-docs/
    ```

- **HTTPS** — a human-readable front page is available at
  [https://lix.sh](https://lix.sh) with the SSH host key published at
  [`/host-key`](https://lix.sh/host-key). Fetch it over HTTPS first to
  avoid TOFU prompts:

    ```shell
    curl -s https://lix.sh/host-key \
      | awk '{print "lix.sh " $0}' >> ~/.ssh/known_hosts
    ssh lix.sh "ls /api"
    ```
