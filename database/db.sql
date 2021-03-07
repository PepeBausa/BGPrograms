use db_bgprograms;

-- Tbl_Usuarios

create table Tbl_Usuarios(
 id int(11) not null,
 username varchar(16) not null,
 password varchar(60) not null,
 fullname varchar(100) not null
);

alter table Tbl_Usuarios
	add primary key (id);
    
alter table Tbl_Usuarios
	modify id int(11) not null auto_increment, auto_increment=1;
    
describe Tbl_Usuarios;

-- Tbl_Links

create table Tbl_Links(
 id int(11) not null,
 title varchar(150) not null,
 url varchar(255) not null,
 description text,
 user_id int(11),
 created_at timestamp not null default current_timestamp,
 constraint fk_user foreign key (user_id) references Tbl_Usuarios(id)
);

alter table Tbl_Links
	add primary key (id);
    
alter table Tbl_Links
		modify id int(11) not null auto_increment, auto_increment=1;

describe Tbl_Links;
