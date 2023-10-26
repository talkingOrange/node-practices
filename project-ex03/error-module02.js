module.exports = function () {
  console.log("function01");
};

exports.function2 = function () {
  console.log("function02");
};

// module.exports -> exports -> 실행 -> return module.exports
