Helper functions to established a new Identity database, and optionally seed with predefined roles and users.

The caller should provide a callback function to establish the initial connection to a specific database engine, since this library has no dependency on any database engine.