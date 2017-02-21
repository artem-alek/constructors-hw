function Dog (info) {
  info = info || {};
  this.color = info.color;
  this.hungry = (info.hungry == undefined ? true : false);
  this.status = info.status || "normal";
  this.owner = info.owner;
  }


export { Dog };
