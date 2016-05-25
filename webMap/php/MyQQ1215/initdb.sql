drop table qq_user;
drop table qq_friend;
drop table qq_message;

create table qq_user(
	id serial primary key,
	username varchar(32) unique not null,
	realname varchar(32),
	password varchar(64),
	regitertime timestamp default now()
);
insert into qq_user(username,password,realname)
values
	('10000',md5('123456'),'laowang'),
	('10010',md5('123456'),'wanglao'),
	('10011',md5('123456'),'csu');
select * from qq_user;
	
create table qq_friend(
	id serial primary key,
	userid integer not null,
	friendid integer not null
);
insert into qq_friend(userid,friendid)
values
	(1,2),
	(2,1),
	(1,3),
	(3,1);
select * from qq_friend;
create table qq_message(
	id serial primary key,
	fromuserid integer,
	touserid integer,
	message varchar(1024),
	sendtime timestamp default now()
);



