function(ellipsis) {
  const EllipsisApi = require('ellipsis-api');
const api = new EllipsisApi(ellipsis);
const test = require('tape');

test.onFailure(ellipsis.error);
test.onFinish(() => ellipsis.success("All passed!"));

test('insult', function (t) {
    t.plan(2);
  
    api.run({ trigger: "…insult @someone" }).then(res => {
      console.log(`The results are: ${res}`);
      const matches = res.match(/\@someone/g);
      t.assert(matches);
      t.equal(matches.length, 1);
    });
  
});
}
