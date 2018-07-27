  //connecting to mysql sT16ui24st16ui24 - nodeadmin
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     //checking that db not exists (else drop database) and create new
//     connection.query("DROP DATABASE IF EXISTS `reactMegaNews`;");
//     connection.query("CREATE DATABASE `reactMegaNews` DEFAULT CHARACTER SET utf8;");
//     connection.query("CREATE TABLE `reactMegaNews`.`category` (`category_id` INT NOT NULL,`name` VARCHAR(45) NULL,PRIMARY KEY (`category_id`));");
//     connection.query("CREATE TABLE `reactMegaNews`.`country` (`country_id` INT NOT NULL,`name` VARCHAR(45) NOT NULL,PRIMARY KEY (`country_id`));");
//     connection.query("CREATE TABLE `reactMegaNews`.`source` (`source_id` INT NOT NULL,`name` VARCHAR(45) NOT NULL,PRIMARY KEY (`source_id`));");
//     connection.query("CREATE TABLE `reactMegaNews`.`news` (`news_id` INT NOT NULL,`news_title` VARCHAR(45) NOT NULL,`news_desc` VARCHAR(45) NOT NULL,`news_author` VARCHAR(45) NOT NULL,`news_url` VARCHAR(45) NOT NULL,`news_imageUrl` VARCHAR(45) NOT NULL,`news_pubdate` DATETIME NOT NULL DEFAULT NOW(),`news_category` INT NOT NULL,`news_country` INT NOT NULL,`news_source` INT NOT NULL,PRIMARY KEY (`news_id`));");
//     connection.query("ALTER TABLE `reactMegaNews`.`news` ADD INDEX `fk_news_category_idx` (`news_category` ASC), ADD INDEX `fk_news_country_idx` (`news_country` ASC), ADD INDEX `fk_news_source_idx` (`news_source` ASC);");
//     connection.query("ALTER TABLE `reactMegaNews`.`news` ADD CONSTRAINT `fk_news_category` FOREIGN KEY (`news_category`) REFERENCES `reactMegaNews`.`category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE, ADD CONSTRAINT `fk_news_country` FOREIGN KEY (`news_country`) REFERENCES `reactMegaNews`.`country` (`country_id`) ON DELETE CASCADE ON UPDATE CASCADE, ADD CONSTRAINT `fk_news_source` FOREIGN KEY (`news_source`) REFERENCES `reactMegaNews`.`source` (`source_id`) ON DELETE CASCADE ON UPDATE CASCADE;");
//   });

//-------------------------------------------------

const express = require('express');
const config = require('./Config/config');
const dbConfig = require('./Database');
const app = express();
const port = process.env.PORT || config.port;

app.post("/", (req,res)=>{
  res.send({
    message: `Hello ${req.body}!`
  })
})

dbConfig.sync()
  .then(() => {
    app.listen(port);
    console.log(`Server started on ${port}`);
  })
  .catch(err => {
    console.error('Server error: ', err);
  });