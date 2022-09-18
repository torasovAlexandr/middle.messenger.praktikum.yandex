export class RenderUtils {
  static createContainer(templateStr: string) {
    const container = document.createElement('div');
    container.innerHTML = templateStr;
    return container;
  }
}
