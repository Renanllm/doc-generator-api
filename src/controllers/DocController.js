const DocService = require("../services/DocService");

module.exports = {
  async generate(req, res) {
    const { body } = req;

    const { template, params } = body;

    try {
      const documentBuffer = await DocService.generateDocumentByParams(
        template,
        params
      );

      res.type('application/octet-stream').send(documentBuffer);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};
