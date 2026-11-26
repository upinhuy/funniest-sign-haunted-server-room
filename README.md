# The Ghost Moved In for the Wi-Fi

![make.fun bounty](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a.svg)
![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/upinhuy/funniest-sign-haunted-server-room/rank.svg)
![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a/upinhuy/funniest-sign-haunted-server-room/reward.svg)

Entry for the [Funniest Sign on a Haunted Server Room Door](https://make.fun/bounty/u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a) bounty on [make.fun](https://make.fun/r/hv9zk8y5).

## The sign

> I moved in for the Wi-Fi. Change the password and I'll haunt your laptop instead. — The Ghost

A one-line sign taped to the door by the ghost itself: it moved into the
server room for the Wi-Fi, and it is not shy about what happens if anyone
changes the password. Office IT life meets the supernatural, in the voice
of the haunting — short enough to read at a glance, sharp enough to make a
tired sysadmin laugh at 3am.

## How it works

`main.ts` is a dependency-free Node.js program (pure Node standard library,
no network). Run it and it writes the sign, exactly one line of 93
characters, to `/output/entry.txt`:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
