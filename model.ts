export interface INode {
  name: string,
  value: string | INode[],
  attr?: { name: string, value: string }[],
  indent?: number[],
}

export class CbyCReport_2016 {
  public report: INode;

  constructor() {
    this.report.attr = [
      { name: "xmlns", value: "urn:oecd:ties:cbc:v1" },
      { name: "version", value: "version1" }
    ]
    this.report.name = "CBC_OECD";
  }

  addHeader(nodes: INode[]) {
    //kann nur einmal zugefügt werden
    if (this.report.value == null) { this.report.value = [] }
    if (Array.isArray(this.report.value) && this.report.value.length > 0) {
      let headerVorhanden = this.report.value.find((x) => { return ((x.name != null) && (x.name == "MessageSpec")) });
      if (headerVorhanden) {
        headerVorhanden.value = [];
        headerVorhanden.value.push(...nodes);
      } else {
        this.report.value.unshift({ name: "MessageSpec", value: [...nodes] })
      }
    }
  }
}
