(2nd) Rewrite of the Herman Twitch Bot - written in C#

using MVVM Light framework to create the bot in MVVM targeting currently .NET 4.7

Currently has feature for sub welcome messages as well as basic database for subs, birthdays and streamer shoutouts.
Also has basc implementation of commands and timers using a custom timer class
Has implementations with Discord to post going live and game change notifications as well as bans.

# TODO: 
  - Make more streamlined command and timer system as well as ways to make new commands and timers.
  - Implement capabilities to have intros for specific viewers.
  - refactor code for better efficiency and making sure everything is running async.
  - Implement more capabilities for features in discord such as managing and makeing new roles based on reacts.
  - More Features soon

# Used nu-get packages...
    Tools > NuGet Package Manager > Manage NuGet Packages for Solutions
  - **MvvmLight** by Laurent Bugnion (GalaSoft)
  - **Newtonsoft.Json** by James Newton-king
  - **WebSocketSharp** by sta
  - **System.Data.SQlite** by SQLite Development Team
"# HermanReleases" 
