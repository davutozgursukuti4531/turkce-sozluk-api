import turkceSozlukApi from "turkce-sozluk-api";
import { KelimeAnlamCekmeReturns, AtasozuDeyimAnlamCekmeReturns } from "../Types/Returns";


turkceSozlukApi.KelimeAnlamCekme("sakla samanı").then((v: KelimeAnlamCekmeReturns) => console.log(v))
