# The App Ciphering

This Node.js application is used for encryption/decrypton text.
 All actions  perform in the console.

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

## Add your files

- [ ] [Create](https://gitlab.com/-/experiment/new_project_readme_content:7c9d86e586ecf47b1bc6cdf3171c002e?https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://gitlab.com/-/experiment/new_project_readme_content:7c9d86e586ecf47b1bc6cdf3171c002e?https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://gitlab.com/-/experiment/new_project_readme_content:7c9d86e586ecf47b1bc6cdf3171c002e?https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/freshtik25/The_app_ciphering.git
git branch -M main
git push -uf origin main
```
## Использование приложения
После скачивания исходных файлов перейдите в корневую директорию приложения и запустите приложение в удобной для работы
 программе (например, WebStorm). После запуска перейдите в терминал.

Данная программа является консольной и призвана зашифровывать и расшифровывать текст на английском языке. Для управления программой используются специальные флаги:
1) Для ввода конфигурации используется флаг -c (или --config) , далее вводится конфигурация, в которой 
содержится информация о виде кодирования (Атбаш, Цезарь, ROT-8) и его типе (шифрование, дешифрование):
    1) A - шифр Атбаш,
    2) C - шифр Цезаря,
    3) R - шифр ROT-8,
    Сразу после буквенного обозначения следует тип шифрования. Для Атбаша указывать тип шифрования не обязательно:
    a) 0 - шифрование,
    b) 1 - дешифрование
    
Значения конфигурации разделяются дефисом(-).
Например, -c "C1-A-C1-C1-C0-R1-R0"

2) Для ввода пути к файлу используется флаг -i (или --input). Обязательный формат входного файла - ".txt"
Например, -i "./text.txt". 
Этот аргумент необязательный, при его отсутствии, текст можно вводит с консоли.

3) Для указания пути к файлу, в котором будет хранится зашифрованный текст, используется флаг -o, после которого 
вводится путь или имя файла (также в формате ".txt"). Если файла не существует, то он будет создан.
Например, -o "./outputText.txt".
Этот аргумент не обязательный, при его отсутствии, текст выводится с консоли.

Для выхода из режима записи и чтения с консоли необходимо нажать Ctrl+C

Примеры запуска программы и ввода данных:

1)Ввод:
node my_ciphering_cli -c "A-C1-C1-C1-R0"
Hello world!

Вывод:
Nqjjg ygdjr
(Для выхода необходимо нажать Ctrl+C)

2)Ввод: (текст в text.txt - Hello world!)

 node my_ciphering_cli -c "A-C0-R0-C1-R0-R0-R0" -i "./text.txt" -o "./textOutput.txt"
 
 Вывод в textOutput.txt:
 Mpiif xfciq!
 
 