export abstract class Command {
  abstract commandLine(): string;

  execute() {
    console.log('Executing:', this.commandLine());
  }
}

export class GitResetCommand extends Command {
  commandLine(): string {
    return 'git reset --hard';
  }
}
