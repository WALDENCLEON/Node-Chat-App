<<<<<<< HEAD
var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage};
=======
var generateMessage =  (from, text) => {

    return {
        from,
        text,
        createdAt: new Date().getTime()
    };

};

module.exports= {generateMessage};
>>>>>>> e85b91a424c9f846b710bc707f392dcf82be48e6
