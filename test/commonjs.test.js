const turkceSozlukApi = require("../index").default


turkceSozlukApi.IdIleKelimeAnlamCekme("5458").then(v => console.log(v))
turkceSozlukApi.EczacilikTerimAnlamCekme("antibiyotik").then((v) => console.log(v))
turkceSozlukApi.KelimeLehceleriCekme("kardeş").then((v) => console.log(v))
