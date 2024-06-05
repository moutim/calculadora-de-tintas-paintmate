interface ITins {
  quantity: number
  size: number
}

interface IResultCalc {
  area: number
  liters: number
  tins: ITins[]
}

export default IResultCalc;
