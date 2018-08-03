export class Utils {
  /**
   * Append properties from object 1 to object 2 if missing
   *
   * @param o1 object to copy to
   * @param o2 object to copy from
   */
  static appendObjects(o1, o2): any {
    console.log('appending two objects', o1, o2);
    const appended = o1;

    for (const i of Object.keys(o2)) {
      if (!o1.hasOwnProperty(i)) {
        appended[i] = o2[i];
      }
    }

    return appended;
  }
}
