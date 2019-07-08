const kaikeba = {
  info: {
    name: "开课吧",
    desc: "开课吧666"
  },
  get name() {
    return this.info.name
  },
  get desc(){
    return this.info.desc
  },
  set name(val) {
    this.info.name = val
  }
}
console.log(kaikeba.name)
console.log(kaikeba.desc)

kaikeba.name = "哈哈哈";
console.log(kaikeba.name)


