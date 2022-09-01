import turkceSozlukApi from "turkce-sozluk-api";
import { KelimeAnlamCekmeReturns, AtasozuDeyimAnlamCekmeReturns } from "../Types/Returns";


turkceSozlukApi.KelimeAnlamCekme("baklava").then((v: KelimeAnlamCekmeReturns) => console.log(v))
