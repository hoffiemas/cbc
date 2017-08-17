class DocSpec {
  constructor(
    public DocTypeIndic: string,
    public DocRefId: string,
    public CorrDocRefId?: string,
    //public CorrMessageRefId?:string, //not used
  ) { }

  getData(): INode {
    let _attr = { name: "xmlns", value: "urn:oecd:ties:stf:v4" };

    let result: INode = {
      name: "DocSpec",
      value: [
        { name: "DocTypeIndic", value: this.DocTypeIndic, attr: [_attr] },
        { name: "DocTypeRefId", value: this.DocRefId, attr: [_attr] }
      ]
    }

    if (this.CorrDocRefId != null && this.CorrDocRefId.trim() != "") {
      (<INode[]>result.value).push({ name: "CorrDocRefId", value: this.CorrDocRefId, attr: [_attr] });

    }
    return result;
  }

}
