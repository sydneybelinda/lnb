
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../dbconfig.json")[env]



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}


var DataTypes = require("sequelize").DataTypes;
var _admire = require("./admire");
var _employment = require("./employment");
var _escorts = require("./escorts");
var _files = require("./files");
var _fos_group = require("./fos_group");
var _fos_user = require("./fos_user");
var _fos_user_user_group = require("./fos_user_user_group");
var _local = require("./local");
var _pages = require("./pages");
var _post = require("./post");
var _postcode_db = require("./postcode_db");
var _postcodedb = require("./postcodedb");
var _select_bust = require("./select_bust");
var _select_chest_bust_hips = require("./select_chest_bust_hips");
var _select_countries = require("./select_countries");
var _select_dresssize = require("./select_dresssize");
var _select_eyes = require("./select_eyes");
var _select_hair = require("./select_hair");
var _select_height = require("./select_height");
var _select_language = require("./select_language");
var _select_level = require("./select_level");
var _select_nationalities = require("./select_nationalities");
var _select_sexualpreference = require("./select_sexualpreference");
var _seoeyes = require("./seoeyes");
var _seohair = require("./seohair");
var _seoorientation = require("./seoorientation");
var _seoother = require("./seoother");
var _seoservices = require("./seoservices");
var _services = require("./services");

function initModels(sequelize) {
  var admire = _admire(sequelize, DataTypes);
  var employment = _employment(sequelize, DataTypes);
  var escorts = _escorts(sequelize, DataTypes);
  var files = _files(sequelize, DataTypes);
  var fos_group = _fos_group(sequelize, DataTypes);
  var fos_user = _fos_user(sequelize, DataTypes);
  var fos_user_user_group = _fos_user_user_group(sequelize, DataTypes);
  var local = _local(sequelize, DataTypes);
  var pages = _pages(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var postcode_db = _postcode_db(sequelize, DataTypes);
  var postcodedb = _postcodedb(sequelize, DataTypes);
  var select_bust = _select_bust(sequelize, DataTypes);
  var select_chest_bust_hips = _select_chest_bust_hips(sequelize, DataTypes);
  var select_countries = _select_countries(sequelize, DataTypes);
  var select_dresssize = _select_dresssize(sequelize, DataTypes);
  var select_eyes = _select_eyes(sequelize, DataTypes);
  var select_hair = _select_hair(sequelize, DataTypes);
  var select_height = _select_height(sequelize, DataTypes);
  var select_language = _select_language(sequelize, DataTypes);
  var select_level = _select_level(sequelize, DataTypes);
  var select_nationalities = _select_nationalities(sequelize, DataTypes);
  var select_sexualpreference = _select_sexualpreference(sequelize, DataTypes);
  var seoeyes = _seoeyes(sequelize, DataTypes);
  var seohair = _seohair(sequelize, DataTypes);
  var seoorientation = _seoorientation(sequelize, DataTypes);
  var seoother = _seoother(sequelize, DataTypes);
  var seoservices = _seoservices(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);

  fos_group.belongsToMany(fos_user, { as: 'users', through: fos_user_user_group, foreignKey: "group_id", otherKey: "user_id" });
  fos_user.belongsToMany(fos_group, { as: 'groups', through: fos_user_user_group, foreignKey: "user_id", otherKey: "group_id" });
  fos_user_user_group.belongsTo(fos_group, { as: "group", foreignKey: "group_id"});
  fos_group.hasMany(fos_user_user_group, { as: "fos_user_user_groups", foreignKey: "group_id"});
  fos_user_user_group.belongsTo(fos_user, { as: "user", foreignKey: "user_id"});
  fos_user.hasMany(fos_user_user_group, { as: "fos_user_user_groups", foreignKey: "user_id"});

  return {
    admire,
    employment,
    escorts,
    files,
    fos_group,
    fos_user,
    fos_user_user_group,
    local,
    pages,
    post,
    postcode_db,
    postcodedb,
    select_bust,
    select_chest_bust_hips,
    select_countries,
    select_dresssize,
    select_eyes,
    select_hair,
    select_height,
    select_language,
    select_level,
    select_nationalities,
    select_sexualpreference,
    seoeyes,
    seohair,
    seoorientation,
    seoother,
    seoservices,
    services,
  };
}

const Models = initModels(sequelize) 


module.exports = Models;
module.exports.initModels = Models;
module.exports.default = Models;
