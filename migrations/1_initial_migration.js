const initialContract = artifacts.require("Migrations");
function(deployer) {
  deployer.deploy(initialContract);
};
