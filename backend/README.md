# ABC-Prolog Backend

This is the backend for the ABC-Prolog project, built using Django.

## Setup

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Alex-Trejo/ABC-Prolog.git
    cd ABC-Prolog/backend
    ```

2. Create a virtual environment:
    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
    - On macOS and Linux:
        ```bash
        source venv/bin/activate
        ```

4. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

5. Apply migrations:
    ```bash
    python manage.py migrate
    ```

6. Run the development server:
    ```bash
    python manage.py runserver
    ```

## Usage

Access the development server at `http://127.0.0.1:8000/`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Contributors

- [Allan Vinicio Panchi Pillajo](https://github.com/AllanPanchi)
- [Karla Alejandra Ansatuña Andrade](https://github.com/KarlaAns)
- [Alex Fernando Trejo Duque](https://github.com/Alex-Trejo)
- [Luis Alejandro Andrade Encalada](https://github.com/MrBowis)