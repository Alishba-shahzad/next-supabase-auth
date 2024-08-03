CREATE TABLE TradingCompanies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    csv_format JSONB
);


CREATE TABLE Users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES Users(id) ON DELETE CASCADE,
    account_name TEXT NOT NULL,
    trading_company_id UUID REFERENCES TradingCompanies(id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CSV_Files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES Users(id) ON DELETE CASCADE,
    account_id UUID REFERENCES Accounts(id) ON DELETE SET NULL,
    file_name TEXT NOT NULL,
    file_url TEXT NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    csv_file_id UUID REFERENCES CSV_Files(id) ON DELETE CASCADE,
    transaction_date DATE,
    transaction_type TEXT,
    details TEXT,
    amount NUMERIC,
    units NUMERIC,
    realized_equity_change NUMERIC,
    realized_equity NUMERIC,
    balance NUMERIC,
    position_id TEXT,
    asset_type TEXT,
    nwa NUMERIC
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
