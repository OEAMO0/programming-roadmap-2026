import { type SectionLayout } from './roadmap-model';

export const roadmapSections: SectionLayout[] = [
  {
    id: 'origins-history',
    tone: 'sand',
    right: ['why-programming', 'why-computers-matter', 'history-of-programming'],
    left: ['history-of-computers', 'computer-components', 'hardware-software-os'],
  },
  {
    id: 'deep-foundations',
    tone: 'reef',
    right: ['bits-logic-circuits', 'number-representation-encodings', 'abstraction-layers', 'cpu-memory-storage'],
    left: ['logic-boolean-models', 'memory-references', 'runtime-execution', 'compilers-interpreters'],
  },
  {
    id: 'core-programming',
    tone: 'rose',
    right: ['problem-solving', 'variables-control-flow', 'functions-modules', 'data-structures-core'],
    left: ['algorithms-thinking', 'debugging-error-handling', 'testing-basics', 'recursion-iteration-patterns'],
  },
  {
    id: 'developer-workflow',
    tone: 'sky',
    right: ['editor-terminal', 'git-github', 'docs-code-review', 'reading-docs-debugging-tools'],
    left: ['project-structure-environments', 'package-managers', 'how-software-is-made', 'learning-strategy-projects'],
  },
  {
    id: 'frontend-web',
    tone: 'lime',
    right: ['html-css-layout', 'javascript-typescript', 'browser-rendering-dom', 'forms-validation-ux'],
    left: ['frontend-framework', 'browser-storage-offline', 'frontend-testing-quality', 'accessibility-performance'],
  },
  {
    id: 'linux-userland-operations',
    tone: 'plum',
    right: ['linux-cli-filesystem-permissions', 'linux-shell-text-pipelines', 'linux-processes-services', 'linux-namespaces-cgroups-isolation', 'linux-networking'],
    left: ['systemd-service-operations', 'reverse-proxy-tls-dns', 'docker-compose', 'linux-boot-initramfs'],
  },
  {
    id: 'linux-systems-programming',
    tone: 'slate',
    right: ['c-language-core', 'c-pointers-memory', 'c-toolchain-debugging', 'c-linux-systems', 'linux-libc-linking'],
    left: ['linux-tracing-profiling', 'linux-ebpf-observability', 'linux-capabilities-seccomp', 'linux-threads-sync', 'linux-sockets-epoll', 'cpp-linux-build', 'linux-math-libraries'],
  },
  {
    id: 'linux-kernel-internals',
    tone: 'amber',
    right: ['operating-systems', 'virtual-memory-filesystems', 'linux-kernel-config-build', 'linux-kernel-uapi-modules'],
    left: ['linux-device-model-drivers', 'linux-kernel-debugging', 'linux-kernel-boot-flow', 'linux-kernel-contribution-workflow', 'linux-kernel-labs-roadmap'],
  },
  {
    id: 'linux-distribution-engineering',
    tone: 'mint',
    right: ['linux-filesystem-hierarchy-packaging', 'linux-buildroot-lfs', 'linux-yocto-layers-recipes', 'linux-distro-on-existing-base', 'linux-package-repositories-signing'],
    left: ['linux-release-images-installers', 'linux-cross-compilation-toolchains', 'linux-init-userspace-integration', 'linux-distribution-testing-maintenance'],
  },
];
