/** @format */

const MongoClient = require('mongodb').MongoClient;

async function readData(dbArgs) {
  const uri = dbArgs.uri;
  const dbName = dbArgs.dbName;
  const cName = dbArgs.cName;

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (client) {
    const db = client.db(dbName);

    // GET the collection
    const col = db.collection(cName);

    r = await col.findOne({});
    // console.log('xxxx', r);

    // RETURN output
    return r;
  }
  return {
    a: client,
    x: uri,
    dbName,
    cName,
  };
}

exports.handler = async function (event, context, callback) {
  /*
  let ts = JSON.parse(event.body);
  const ta = ts.message.data;
  const uid = ts.message.messageId;

  var buf = Buffer.from(ta, 'base64').toString('utf-8'); // Ta-da
  axios.put('https://jorjoran-labs.firebaseio.com/netlify/' + uid + '.json', {
    data: buf,
  });
  */
  const dbArgs = {
    uri:
      // 'mongodb+srv://root:jorjoran@jorjorandev-zgun0.gcp.mongodb.net/test?retryWrites=true&w=majority',
      'mongodb+srv://root:root@jorjoranlabs-us.sbncs.mongodb.net/clogs?retryWrites=true&w=majority',
    dbName: 'jorjoran_alpha',
    cName: 'accounts',
  };
  const ts = await readData(dbArgs);

  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify({
      crot: 'oke',
      sempak: ts,
    }),
  };
};
