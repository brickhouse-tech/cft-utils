const taggable = require('./taggable');

describe(taggable.isTaggableResource.name, () => {
  ['AWS::IAM::Role'].forEach((resourceName) => {
    it(`${resourceName} is taggable`, async () => {
      const isTag = await taggable.isTaggableResource(resourceName);
      expect(isTag).toBe(true);
    });
  });

  ['AWS::IAM::Policy', 'AWS::IAM::ManagedPolicy'].forEach((resourceName) => {
    it(`${resourceName} is NOT taggable`, async () => {
      const isTag = await taggable.isTaggableResource(resourceName);
      expect(isTag).toBe(false);
    });
  });
});
