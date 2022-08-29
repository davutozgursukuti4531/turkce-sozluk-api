const turkceSozlukApi = require("../index").default



turkceSozlukApi.IsimAnlamCekme("erkek", "davut").then((v) => console.log(v))
