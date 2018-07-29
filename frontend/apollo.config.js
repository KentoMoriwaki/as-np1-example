module.exports = {
  schemas: {
    default: {
      endpoint: "http://localhost:4000"
    }
  },
  queries: [
    {
      schema: "schema.json",
      includes: ["src/**/*.tsx"],
      excludes: ["node_modules/**"]
    }
  ]
};
