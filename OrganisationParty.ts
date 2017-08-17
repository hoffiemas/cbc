export class OrganisationParty_Type {
  constructor(
    public ResCountryCode: string[],
    public TIN: string, //one ore more?
    public TIN_issuedBy: string,
    public Name: string[],
    public IN?: string,
    public IN_issuedBy?: string,
    public INType?: string
  ) { }


  getData(): INode[] {
    let result: INode[] = [];

    for (let cont of this.ResCountryCode) {
      result.push({ name: "ResCountryCode", value: cont });
    }

    this.TIN.trim() == "" && (this.TIN = "NOTIN")
    return
  }
}
