CREATE TABLE users (
    id VARCHAR(200) NOT NULL UNIQUE PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    username VARCHAR(60) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    avatar VARCHAR(200) NOT NULL DEFAULT "https://robohash.org/profile-default",
    created_at VARCHAR(200) NOT NULL DEFAULT(DATETIME('NOW')),
    updated_at VARCHAR(200) NOT NULL DEFAULT(DATETIME('NOW'))
);

INSERT INTO
    users (
        id,
        first_name,
        last_name,
        username,
        email,
        password_hash
    )
VALUES (
        "24.01095-4",
        "ERIKA",
        "LEITE",
        "@botechia-erika",
        "botechia94.erika@gmail.com",
        --RobotTeste123!
        "$2y$12$7IniamsJ/ms0c3Eih9yqP.1MeYm7JvGpGltfZcLo93nPpWomG8v0e"
    ),
    (
        "5e9a45d8-fa26-43e9-b879-dd4d55219b20",
        "LUIZA",
        "SONZA",
        "@sonza-luiza",
        "lulu.sonza@gmail.com",
        --BoaMenina123!
        "$2y$12$BcZK8R3YmpFO0pBKON8iyucuJ5XNzb2.blagtGQ.93hgfQMCB29B6"
    ),
    (
        "ba664685-fcbd-4afb-aef1-8e9c75f4e183",
        "HUGO",
        "SILVEIRA",
        "@hugo-silveira",
        "dev.hugo@gmail.com",
        --RobotizandoTeste123!
        "$2y$12$HXJBDtpVnNRrGya0BS0rYumELRydNLzek70uPV6aeJa9dKWHvrH9O"
    ),
    (
        "5e92222d8-fa26-43e9-b879-dd4d55219b20",
        "FABIANO",
        "MELLO",
        "@mello-fabiano",
        "fabian.mell@gmail.com",
        --Robot123Testando!
        "$2y$12$a2uvkyXWBbEb1A4yqcfDRugqc3Y31OBtGiCFjvAyvfFJAQyg8VLW."
    ),
    (
        "15bb9830-d9a2-42ce-9aa4-c900815ebe5b",
        "GABRIELLE",
        "SILVA",
        "@gabi-silva",
        "gabi-silva@gmail.com",
        --Robot123Teste!
        "$2y$12$aU9MK9Nf3C2TfZZ47bBAn.0sav.FnMTiVkxExb73QIxVJHN/qO9Aq"
    );