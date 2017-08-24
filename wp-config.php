<?php
/** Enable W3 Total Cache */
 //Added by WP-Cache Manager

/** Enable W3 Total Cache */
 //Added by WP-Cache Manager

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
 //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/var/www/html/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'targead');
/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'urj&eUjfh@6');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '8ztkigsk6clqeqqusjbaqweyijigtpo9inyg95cn5robcavzr2mek2hzr9peyufa');
define('SECURE_AUTH_KEY',  'mohonli5jetuggrwiq7odaedgajwqo1i9k4ncjremx5hdzmhahuilwbmewxn5grl');
define('LOGGED_IN_KEY',    'xvicytmhijb5n0lbvueon4u9twnsq3f6d2qqufml6eygdyv9pazqtsy5w2bjsk6y');
define('NONCE_KEY',        'gzfxjpaufgqlbj3etqy5i2nm28x7gvjyoxj9ha2sjb6u0xqucvd6ca2zzcr4zopd');
define('AUTH_SALT',        'fw2jqir26pgz1kzjepnructt5l03gygvdzqyuuge5xbl477qyy8ljxgzvdsadfhy');
define('SECURE_AUTH_SALT', 'wmpfqi9xzq3tknmklzedkb4bkkpekpaklogumot4ztcliagzm3pz1wrv6hwdoebe');
define('LOGGED_IN_SALT',   '5jt05emouppz359v1ri9w7zdqqar9ypupu3sozkkglkbhpkfxp2wno3bolg2n8xl');
define('NONCE_SALT',       'a6ajqyb0jmnx3ghrhruj12rlycxzpxu7o2vwmosfx9lgsg9bytitrhwolg0obry8');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define('FORCE_SSL_ADMIN', true);
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
