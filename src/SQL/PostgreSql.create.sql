﻿




CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 КодСотрудника INT NULL,
 Фамилия VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Кабинет (
 primaryKey UUID NOT NULL,
 НомерКабинета INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиент (
 primaryKey UUID NOT NULL,
 КодКлиента INT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 ДатаРождения INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Документы (
 primaryKey UUID NOT NULL,
 СерияПаспорта INT NULL,
 НомерПаспорта INT NULL,
 Полис INT NULL,
 Клиент UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 КодДолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Запись (
 primaryKey UUID NOT NULL,
 КодЗаписи INT NULL,
 Время VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 Сумма DOUBLE PRECISION NULL,
 ТипОплаты VARCHAR(255) NULL,
 Комментарий VARCHAR(255) NULL,
 Сотрудник UUID NOT NULL,
 Кабинет UUID NOT NULL,
 Клиент UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сотрудник ADD CONSTRAINT FK52e78a286299ec0faa67b4f751a6cda2dec1a57a FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index52e78a286299ec0faa67b4f751a6cda2dec1a57a on Сотрудник (Должность); 

 ALTER TABLE Документы ADD CONSTRAINT FK111e3b9442d47c44d653f07cd86b5ca4ee8cace2 FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Index111e3b9442d47c44d653f07cd86b5ca4ee8cace2 on Документы (Клиент); 

 ALTER TABLE Запись ADD CONSTRAINT FKf5850b3b339cec39e0d339db751393dadb4d27a9 FOREIGN KEY (Сотрудник) REFERENCES Сотрудник; 
CREATE INDEX Indexf5850b3b339cec39e0d339db751393dadb4d27a9 on Запись (Сотрудник); 

 ALTER TABLE Запись ADD CONSTRAINT FK5fb6619bf34444a4837e4bd47e567097f8acbcbb FOREIGN KEY (Кабинет) REFERENCES Кабинет; 
CREATE INDEX Index5fb6619bf34444a4837e4bd47e567097f8acbcbb on Запись (Кабинет); 

 ALTER TABLE Запись ADD CONSTRAINT FK1dc3b24c817a0a523cd77286bc23d0b7625c5ac7 FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Index1dc3b24c817a0a523cd77286bc23d0b7625c5ac7 on Запись (Клиент); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

