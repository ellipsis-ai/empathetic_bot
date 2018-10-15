function(ellipsis) {
  const EllipsisApi = require('ellipsis-api');
const api = new EllipsisApi(ellipsis);
const test = require('tape');

test.onFailure(ellipsis.error);
test.onFinish(() => ellipsis.success("All passed!"));

test('insult', function (t) {
    t.plan(1);
  
    const args = [
      { name: "someone", value: "@user" }
    ];
    api.run({ actionName: "insult", args: args }).then(res => {
      console.log(`The results are: ${res}`);
      const matches = res.match(/\@user/g);
      t.assert(matches);
    });
  
});
}
