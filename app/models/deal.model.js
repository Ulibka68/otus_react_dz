const connection = require("./db.js");

// конструктор нашего дела. В нашем todo будет два задаваемых значения
// текст и внутреннее inner_id для нашего дела

const Deal = function(deal) {
  this.text = deal.text;
  this.inner_key = deal.inner_key;
};


Deal.create = (newDeal, result) => {

  const queryInsert = "INSERT INTO TODO SET ?";
  connection.query(queryInsert, newDeal, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Создано дело", { id: res.insertId, ...newDeal });
    result(null, { id: res.insertId, ...newDeal }); 
    //используем spread для отправки наших аргументов в базу данных

  });
};



//получение дела по одному inner_id
Deal.findById = (dealId, result) => {
  const queryFintbyId = `SELECT * FROM TODO WHERE inner_key = '${dealId}'`;
  connection.query(queryFintbyId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("найдено дело: ", res[0]);
      result(null, res[0]);
      return;
    }
    // когда ничего не удалось найти
    result({ kind: "not_found" }, null);
  });
};

 Deal.getAll = result => {
   // здесь я немного переписал по сравнению с предыдущим разом
   // я хочу из базы данных только текст и inner_key, сам id из базы данных я забирать не хочу
   const queryAll = "SELECT text, inner_key FROM TODO";
  connection.query(queryAll, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("deals: ", res);
    result(null, res);
  });
};

//мы будем обновлять дела по inner_key
Deal.updateById = (inner_key, deal, result) => {
  console.log("deal : ",deal," :END");

  const queryUpdate = "UPDATE TODO SET text = ?  WHERE inner_key = ?";
  connection.query(
    queryUpdate,
    [deal.text, inner_key],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Обновлено дело ", { inner_key: inner_key, ...deal });
      result(null, { inner_key: inner_key, ...deal });
    }
  );
};



Deal.remove = (inner_key, result) => {
  const queryDelete = "DELETE FROM TODO WHERE inner_key = ?";
  connection.query(queryDelete, inner_key, (err, res) => {
    if (err) {
      console.log("error: ", err); 
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      //  если дело не удалось получить по inner_key
      result({ kind: "не найдено" }, null);
      return;
    }

    console.log("Удален пользователь с  ", inner_key);
    result(null, res);
  });
};

Deal.removeAll = result => {
  connection.query("DELETE FROM TODO", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} deals`);
    result(null, res);
  });
};

module.exports = Deal;
