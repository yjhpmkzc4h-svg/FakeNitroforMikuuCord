"use strict";
/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var MessageEvents_1 = require("@api/MessageEvents");
var Settings_1 = require("@api/Settings");
var apng_1 = require("@utils/apng");
var constants_1 = require("@utils/constants");
var discord_1 = require("@utils/discord");
var Logger_1 = require("@utils/Logger");
var types_1 = require("@utils/types");
var enums_1 = require("@vencord/discord-types/enums");
var _webpack_1 = require("@webpack");
var common_1 = require("@webpack/common");
var gifenc_1 = require("gifenc");
var BINARY_READ_OPTIONS = (0, _webpack_1.findByPropsLazy)("readerFactory");
function searchProtoClassField(localName, protoClass) {
    var _a;
    var field = (_a = protoClass === null || protoClass === void 0 ? void 0 : protoClass.fields) === null || _a === void 0 ? void 0 : _a.find(function (field) { return field.localName === localName; });
    if (!field)
        return;
    var fieldGetter = Object.values(field).find(function (value) { return typeof value === "function"; });
    return fieldGetter === null || fieldGetter === void 0 ? void 0 : fieldGetter();
}
var logger = new Logger_1.Logger("FakeNitro");
var PreloadedUserSettingsActionCreators = (0, _webpack_1.proxyLazyWebpack)(function () { return common_1.UserSettingsActionCreators.PreloadedUserSettingsActionCreators; });
var AppearanceSettingsActionCreators = (0, _webpack_1.proxyLazyWebpack)(function () { return searchProtoClassField("appearance", PreloadedUserSettingsActionCreators.ProtoClass); });
var ClientThemeSettingsActionsCreators = (0, _webpack_1.proxyLazyWebpack)(function () { return searchProtoClassField("clientThemeSettings", AppearanceSettingsActionCreators); });
var isUnusableRoleSubscriptionEmoji = (0, _webpack_1.findByCodeLazy)(".getUserIsAdmin(");
var EmojiIntentions;
(function (EmojiIntentions) {
    EmojiIntentions[EmojiIntentions["REACTION"] = 0] = "REACTION";
    EmojiIntentions[EmojiIntentions["STATUS"] = 1] = "STATUS";
    EmojiIntentions[EmojiIntentions["COMMUNITY_CONTENT"] = 2] = "COMMUNITY_CONTENT";
    EmojiIntentions[EmojiIntentions["CHAT"] = 3] = "CHAT";
    EmojiIntentions[EmojiIntentions["GUILD_STICKER_RELATED_EMOJI"] = 4] = "GUILD_STICKER_RELATED_EMOJI";
    EmojiIntentions[EmojiIntentions["GUILD_ROLE_BENEFIT_EMOJI"] = 5] = "GUILD_ROLE_BENEFIT_EMOJI";
    EmojiIntentions[EmojiIntentions["COMMUNITY_CONTENT_ONLY"] = 6] = "COMMUNITY_CONTENT_ONLY";
    EmojiIntentions[EmojiIntentions["SOUNDBOARD"] = 7] = "SOUNDBOARD";
    EmojiIntentions[EmojiIntentions["VOICE_CHANNEL_TOPIC"] = 8] = "VOICE_CHANNEL_TOPIC";
    EmojiIntentions[EmojiIntentions["GIFT"] = 9] = "GIFT";
    EmojiIntentions[EmojiIntentions["AUTO_SUGGESTION"] = 10] = "AUTO_SUGGESTION";
    EmojiIntentions[EmojiIntentions["POLLS"] = 11] = "POLLS";
})(EmojiIntentions || (EmojiIntentions = {}));
var IS_BYPASSEABLE_INTENTION = "[".concat(EmojiIntentions.CHAT, ",").concat(EmojiIntentions.GUILD_STICKER_RELATED_EMOJI, "].includes(fakeNitroIntention)");
var FakeNoticeType;
(function (FakeNoticeType) {
    FakeNoticeType[FakeNoticeType["Sticker"] = 0] = "Sticker";
    FakeNoticeType[FakeNoticeType["Emoji"] = 1] = "Emoji";
})(FakeNoticeType || (FakeNoticeType = {}));
var fakeNitroEmojiRegex = /\/emojis\/(\d+?)\.(png|webp|gif)/;
var fakeNitroStickerRegex = /\/stickers\/(\d+?)\./;
var fakeNitroGifStickerRegex = /\/attachments\/\d+?\/\d+?\/(\d+?)\.gif/;
var hyperLinkRegex = /\[.+?\]\((https?:\/\/.+?)\)/;
var mediaSizes = [16, 32, 48, 56, 64, 96, 128, 160, 256, 512, 1024];
var DEFAULT_EMOJI_SIZE = 48;
var DEFAULT_STICKER_SIZE = 160;
var settings = (0, Settings_1.definePluginSettings)({
    enableEmojiBypass: {
        description: "Allows sending fake emojis (also bypasses missing permission to use custom emojis)",
        type: types_1.OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    emojiSize: {
        description: "Size of the emojis when sending",
        type: types_1.OptionType.SELECT,
        default: DEFAULT_EMOJI_SIZE,
        options: mediaSizes.map(function (size) { return ({
            label: "".concat(size, "px"),
            value: size
        }); })
    },
    transformEmojis: {
        description: "Whether to transform fake emojis into real ones",
        type: types_1.OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    enableStickerBypass: {
        description: "Allows sending fake stickers (also bypasses missing permission to use stickers)",
        type: types_1.OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    stickerSize: {
        description: "Size of the stickers when sending",
        type: types_1.OptionType.SELECT,
        default: DEFAULT_STICKER_SIZE,
        options: mediaSizes.map(function (size) { return ({
            label: "".concat(size, "px"),
            value: size
        }); })
    },
    transformStickers: {
        description: "Whether to transform fake stickers into real ones",
        type: types_1.OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    transformCompoundSentence: {
        description: "Whether to transform fake stickers and emojis in compound sentences (sentences with more content than just the fake emoji or sticker link)",
        type: types_1.OptionType.BOOLEAN,
        default: false
    },
    enableStreamQualityBypass: {
        description: "Allow streaming in nitro quality",
        type: types_1.OptionType.BOOLEAN,
        default: true,
        restartNeeded: true
    },
    useHyperLinks: {
        description: "Whether to use hyperlinks when sending fake emojis and stickers",
        type: types_1.OptionType.BOOLEAN,
        default: true
    },
    hyperLinkText: {
        description: "What text the hyperlink should use. {{NAME}} will be replaced with the emoji/sticker name.",
        type: types_1.OptionType.STRING,
        default: "{{NAME}}"
    },
    disableEmbedPermissionCheck: {
        description: "Whether to disable the embed permission check when sending fake emojis and stickers",
        type: types_1.OptionType.BOOLEAN,
        default: false
    }
});
function hasPermission(channelId, permission) {
    var channel = common_1.ChannelStore.getChannel(channelId);
    if (!channel || channel.isPrivate())
        return true;
    return common_1.PermissionStore.can(permission, channel);
}
var hasExternalEmojiPerms = function (channelId) { return hasPermission(channelId, common_1.PermissionsBits.USE_EXTERNAL_EMOJIS); };
var hasExternalStickerPerms = function (channelId) { return hasPermission(channelId, common_1.PermissionsBits.USE_EXTERNAL_STICKERS); };
var hasEmbedPerms = function (channelId) { return hasPermission(channelId, common_1.PermissionsBits.EMBED_LINKS); };
var hasAttachmentPerms = function (channelId) { return hasPermission(channelId, common_1.PermissionsBits.ATTACH_FILES); };
function getWordBoundary(origStr, offset) {
    return (!origStr[offset] || /\s/.test(origStr[offset])) ? "" : " ";
}
function CannotEmbedNoticeModal(_a) {
    var modalProps = _a.modalProps, resolve = _a.resolve;
    var s = settings.use(["disableEmbedPermissionCheck"]);
    return __assign({}, modalProps);
    title = "Hold on!";
    subtitle = "You are trying to send/edit a message that contains a FakeNitro emoji or sticker, however you do not have permissions to embed links in the current channel. Are you sure you want to send this message? Your FakeNitro items will appear as a link only.";
    confirmText = "Send Anyway";
    cancelText = "Cancel";
    onConfirm = {}();
    resolve(true);
}
onCloseCallback = {}();
setImmediate(function () { return resolve(false); });
checkboxProps = {};
{
    checked: s.disableEmbedPermissionCheck === true,
        onChange;
    (function (checked) { return s.disableEmbedPermissionCheck = checked; });
}
/>;
;
function showCannotEmbedNotice() {
    return new Promise(function (resolve) {
        (0, common_1.openModal)(function (props) { return modalProps; }, { props: props }, resolve = { resolve: resolve } /  > );
    });
}
exports.default = (0, types_1.default)({
    name: "FakeNitro",
    authors: [constants_1.Devs.Arjix, constants_1.Devs.D3SOX, constants_1.Devs.Ven, constants_1.Devs.fawn, constants_1.Devs.captain, constants_1.Devs.Nuckyz, constants_1.Devs.AutumnVN, constants_1.Devs.sadan],
    description: "Allows you to send fake emojis/stickers, use nitro themes, and stream in nitro quality",
    tags: ["Emotes", "Appearance", "Customisation", "Chat"],
    dependencies: ["MessageEventsAPI"],
    settings: settings,
    patches: [
        {
            find: "canUseCustomStickersEverywhere:",
            replacement: [
                {
                    match: /(?<=canUseCustomStickersEverywhere:function\(\i\)\{)/,
                    replace: "return true;",
                    predicate: function () { return settings.store.enableStickerBypass; }
                },
                {
                    match: /(?<=canUseHighVideoUploadQuality:function\(\i\)\{)/,
                    replace: "return true;",
                    predicate: function () { return settings.store.enableStreamQualityBypass; }
                },
                {
                    match: /(?<=canStreamQuality:function\(\i,\i\)\{)/,
                    replace: "return true;",
                    predicate: function () { return settings.store.enableStreamQualityBypass; }
                },
                {
                    match: /(?<=canUseClientThemes:function\(\i\)\{)/,
                    replace: "return true;"
                },
                {
                    match: /(?<=canUsePremiumAppIcons:function\(\i\)\{)/,
                    replace: "return true;"
                }
            ],
        },
        // Patch the emoji picker in voice calls to not be bypassed by fake nitro
        {
            find: '.getByName("fork_and_knife")',
            predicate: function () { return settings.store.enableEmojiBypass; },
            replacement: {
                match: ".CHAT",
                replace: ".STATUS"
            }
        },
        {
            find: ".GUILD_SUBSCRIPTION_UNAVAILABLE;",
            group: true,
            predicate: function () { return settings.store.enableEmojiBypass; },
            replacement: [
                {
                    // Create a variable for the intention of using the emoji
                    match: /(?<=\.USE_EXTERNAL_EMOJIS.+?;)(?<=intention:(\i).+?)/,
                    replace: function (_, intention) { return "const fakeNitroIntention=".concat(intention, ";"); }
                },
                {
                    // Disallow the emoji for external if the intention doesn't allow it
                    match: /&&!\i&&!\i(?=\)return \i\.\i\.DISALLOW_EXTERNAL;)/,
                    replace: function (m) { return "".concat(m, "&&!").concat(IS_BYPASSEABLE_INTENTION); }
                },
                {
                    // Disallow the emoji for unavailable if the intention doesn't allow it
                    match: /!\i\.available(?=\)return \i\.\i\.GUILD_SUBSCRIPTION_UNAVAILABLE;)/,
                    replace: function (m) { return "".concat(m, "&&!").concat(IS_BYPASSEABLE_INTENTION); }
                },
                {
                    // Disallow the emoji for premium locked if the intention doesn't allow it
                    match: /(?<=!\(\i\|\|)\i\.\i\.canUseEmojisEverywhere\(\i\)/,
                    replace: function (check) { return "(".concat(check, "||").concat(IS_BYPASSEABLE_INTENTION, ")"); }
                },
                {
                    // Allow animated emojis to be used if the intention allows it
                    match: /(?<=\|\|)\i\.\i\.canUseAnimatedEmojis\(\i\)/,
                    replace: function (m) { return "(".concat(m, "||").concat(IS_BYPASSEABLE_INTENTION, ")"); }
                }
            ]
        },
        // Allows the usage of subscription-locked emojis
        {
            find: ".getUserIsAdmin(",
            replacement: {
                match: /(function \i\(\i,\i)\){(.{0,250}.getUserIsAdmin\(.+?return!1})/,
                replace: function (_, rest1, rest2) { return "".concat(rest1, ",fakeNitroOriginal){if(!fakeNitroOriginal)return false;").concat(rest2); }
            }
        },
        // Make stickers always available
        {
            find: '"SENDABLE"',
            predicate: function () { return settings.store.enableStickerBypass; },
            replacement: {
                match: /\i\.available\?/,
                replace: "true?"
            }
        },
        // Remove boost requirements to stream with high quality
        {
            find: "#{intl::STREAM_FPS_OPTION}",
            predicate: function () { return settings.store.enableStreamQualityBypass; },
            replacement: {
                match: /guildPremiumTier:\i\.\i\.TIER_\d,?/g,
                replace: ""
            }
        },
        {
            find: '"UserSettingsProtoStore"',
            replacement: [
                {
                    // Overwrite incoming connection settings proto with our local settings
                    match: /(?<=CONNECTION_OPEN:function\((\i)\){)/,
                    replace: function (_, props) { return "$self.handleProtoChange(".concat(props, ".userSettingsProto,").concat(props, ".user);"); }
                },
                {
                    // Overwrite non local proto changes with our local settings
                    match: /let{settings:/,
                    replace: "arguments[0].local||$self.handleProtoChange(arguments[0].settings.proto);$&"
                }
            ]
        },
        // Call our function to handle changing the gradient theme when selecting a new one
        {
            find: ",updateTheme(",
            replacement: {
                match: /(function \i\(\i\){let{backgroundGradientPresetId:(\i).+?)(\i\.\i\.updateAsync.+?theme=(.+?),.+?},\i\))/,
                replace: function (_, rest, backgroundGradientPresetId, originalCall, theme) { return "".concat(rest, "$self.handleGradientThemeSelect(").concat(backgroundGradientPresetId, ",").concat(theme, ",()=>").concat(originalCall, ");"); }
            }
        },
        // Allow users to use custom client themes
        {
            find: ".CLIENT_THEMES_EDITOR?",
            replacement: {
                match: /(?<=\i=)\(0,\i\.\i\)\(\i\.\i\.TIER_2\)(?=,|;)/g,
                replace: "true"
            }
        },
        {
            find: '["strong","em","u","text","inlineCode","s","spoiler"]',
            predicate: function () { return settings.store.transformEmojis || settings.store.transformStickers; },
            replacement: {
                match: /\(\{ast:(\i)(?=,inline:\i)/,
                replace: "({ast:$self.transformAst($1)"
            }
        },
        {
            find: "}renderStickersAccessories(",
            replacement: [
                {
                    // Call our function to decide whether the embed should be ignored or not
                    predicate: function () { return settings.store.transformEmojis || settings.store.transformStickers; },
                    match: /(renderEmbeds\((\i)\){)(.+?embeds\.map\(\((\i),\i\)?=>{)/,
                    replace: function (_, rest1, message, rest2, embed) { return "".concat(rest1, "const fakeNitroMessage=").concat(message, ";").concat(rest2, "if($self.shouldIgnoreEmbed(").concat(embed, ",fakeNitroMessage))return null;"); }
                },
                {
                    // Patch the stickers array to add fake nitro stickers
                    predicate: function () { return settings.store.transformStickers; },
                    match: /renderStickersAccessories\((\i)\){let (\i)=\(0,\i\.\i\)\(\i\).+?;/,
                    replace: function (m, message, stickers) { return "".concat(m).concat(stickers, "=$self.patchFakeNitroStickers(").concat(stickers, ",").concat(message, ");"); }
                },
                {
                    // Filter attachments to remove fake nitro stickers or emojis
                    predicate: function () { return settings.store.transformStickers; },
                    match: /renderAttachments\(\i\){.+?{attachments:(\i).+?;/,
                    replace: function (m, attachments) { return "".concat(m).concat(attachments, "=$self.filterAttachments(").concat(attachments, ");"); }
                }
            ]
        },
        {
            find: "#{intl::STICKER_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION}",
            predicate: function () { return settings.store.transformStickers; },
            replacement: [
                {
                    // Export the renderable sticker to be used in the fake nitro sticker notice
                    match: /let{renderableSticker:(\i).{0,270}sticker:\i,channel:\i,/,
                    replace: function (m, renderableSticker) { return "".concat(m, "fakeNitroRenderableSticker:").concat(renderableSticker, ","); }
                },
                {
                    // Add the fake nitro sticker notice
                    match: /(let \i,{sticker:\i,channel:\i,closePopout:\i.+?}=(\i).+?;)(.+?description:)(\i)(?=,sticker:\i)/,
                    replace: function (_, rest, props, rest2, reactNode) { return "".concat(rest, "let{fakeNitroRenderableSticker}=").concat(props, ";").concat(rest2, "$self.addFakeNotice(").concat(FakeNoticeType.Sticker, ",").concat(reactNode, ",!!fakeNitroRenderableSticker?.fake)"); }
                }
            ]
        },
        {
            find: ".EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED,",
            predicate: function () { return settings.store.transformEmojis; },
            replacement: {
                // Export the emoji node to be used in the fake nitro emoji notice
                match: /isDiscoverable:\i,shouldHideRoleSubscriptionCTA:\i,(?<={node:(\i),.+?)/,
                replace: function (m, node) { return "".concat(m, "fakeNitroNode:").concat(node, ","); }
            }
        },
        {
            find: "#{intl::EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION}",
            predicate: function () { return settings.store.transformEmojis; },
            replacement: {
                // Add the fake nitro emoji notice
                match: /(?<=emojiDescription:)(\i)(?<=\1=function\(\i\)\{let\{sourceType:.+?)/,
                replace: function (_, reactNode) { return "$self.addFakeNotice(".concat(FakeNoticeType.Emoji, ",").concat(reactNode, ",!!arguments[0]?.fakeNitroNode?.fake)"); }
            }
        },
        // Separate patch for allowing using custom app icons
        {
            find: "getCurrentDesktopIcon(),",
            replacement: {
                match: /\i\.\i\.isPremium\(\i\.\i\.getCurrentUser\(\)\)/,
                replace: "true"
            }
        },
        // Make all Soundboard sounds available
        {
            find: 'type:"GUILD_SOUNDBOARD_SOUND_CREATE"',
            replacement: {
                match: /(?<=type:"(?:SOUNDBOARD_SOUNDS_RECEIVED|GUILD_SOUNDBOARD_SOUND_CREATE|GUILD_SOUNDBOARD_SOUND_UPDATE|GUILD_SOUNDBOARD_SOUNDS_UPDATE)".+?available:)\i\.available/g,
                replace: "true"
            }
        }
    ],
    get guildId() {
        var _a;
        return (_a = (0, discord_1.getCurrentGuild)()) === null || _a === void 0 ? void 0 : _a.id;
    },
    get canUseEmotes() {
        var _a;
        return ((_a = common_1.UserStore.getCurrentUser().premiumType) !== null && _a !== void 0 ? _a : 0) > 0;
    },
    get canUseStickers() {
        var _a;
        return ((_a = common_1.UserStore.getCurrentUser().premiumType) !== null && _a !== void 0 ? _a : 0) > 1;
    },
    handleProtoChange: function (proto, user) {
        var _a, _b, _c, _d;
        try {
            if (proto == null || typeof proto === "string")
                return;
            var premiumType = (_c = (_a = user === null || user === void 0 ? void 0 : user.premium_type) !== null && _a !== void 0 ? _a : (_b = common_1.UserStore === null || common_1.UserStore === void 0 ? void 0 : common_1.UserStore.getCurrentUser()) === null || _b === void 0 ? void 0 : _b.premiumType) !== null && _c !== void 0 ? _c : 0;
            if (premiumType !== 2) {
                (_d = proto.appearance) !== null && _d !== void 0 ? _d : (proto.appearance = AppearanceSettingsActionCreators.create());
                var protoStoreAppearenceSettings = common_1.UserSettingsProtoStore.settings.appearance;
                var appearanceSettingsOverwrite = AppearanceSettingsActionCreators.create(__assign(__assign({}, proto.appearance), { theme: protoStoreAppearenceSettings === null || protoStoreAppearenceSettings === void 0 ? void 0 : protoStoreAppearenceSettings.theme, clientThemeSettings: protoStoreAppearenceSettings === null || protoStoreAppearenceSettings === void 0 ? void 0 : protoStoreAppearenceSettings.clientThemeSettings }));
                proto.appearance = appearanceSettingsOverwrite;
            }
        }
        catch (err) {
            new Logger_1.Logger("FakeNitro").error(err);
        }
    },
    handleGradientThemeSelect: function (backgroundGradientPresetId, theme, original) {
        var _a, _b, _c;
        var premiumType = (_b = (_a = common_1.UserStore === null || common_1.UserStore === void 0 ? void 0 : common_1.UserStore.getCurrentUser()) === null || _a === void 0 ? void 0 : _a.premiumType) !== null && _b !== void 0 ? _b : 0;
        if (premiumType === 2 || backgroundGradientPresetId == null)
            return original();
        if (!PreloadedUserSettingsActionCreators || !AppearanceSettingsActionCreators || !ClientThemeSettingsActionsCreators || !BINARY_READ_OPTIONS)
            return;
        var currentAppearanceSettings = PreloadedUserSettingsActionCreators.getCurrentValue().appearance;
        var newAppearanceProto = currentAppearanceSettings != null
            ? AppearanceSettingsActionCreators.fromBinary(AppearanceSettingsActionCreators.toBinary(currentAppearanceSettings), BINARY_READ_OPTIONS)
            : AppearanceSettingsActionCreators.create();
        newAppearanceProto.theme = theme;
        var clientThemeSettingsDummy = ClientThemeSettingsActionsCreators.create({
            backgroundGradientPresetId: {
                value: backgroundGradientPresetId
            }
        });
        (_c = newAppearanceProto.clientThemeSettings) !== null && _c !== void 0 ? _c : (newAppearanceProto.clientThemeSettings = clientThemeSettingsDummy);
        newAppearanceProto.clientThemeSettings.backgroundGradientPresetId = clientThemeSettingsDummy.backgroundGradientPresetId;
        var proto = PreloadedUserSettingsActionCreators.ProtoClass.create();
        proto.appearance = newAppearanceProto;
        common_1.FluxDispatcher.dispatch({
            type: "USER_SETTINGS_PROTO_UPDATE",
            local: true,
            partial: true,
            settings: {
                type: 1,
                proto: proto
            }
        });
    },
    trimContent: function (content) {
        var _a, _b;
        var firstContent = content[0];
        if (typeof firstContent === "string") {
            content[0] = firstContent.trimStart();
            content[0] || content.shift();
        }
        else if (typeof ((_a = firstContent === null || firstContent === void 0 ? void 0 : firstContent.props) === null || _a === void 0 ? void 0 : _a.children) === "string") {
            firstContent.props.children = firstContent.props.children.trimStart();
            firstContent.props.children || content.shift();
        }
        var lastIndex = content.length - 1;
        var lastContent = content[lastIndex];
        if (typeof lastContent === "string") {
            content[lastIndex] = lastContent.trimEnd();
            content[lastIndex] || content.pop();
        }
        else if (typeof ((_b = lastContent === null || lastContent === void 0 ? void 0 : lastContent.props) === null || _b === void 0 ? void 0 : _b.children) === "string") {
            lastContent.props.children = lastContent.props.children.trimEnd();
            lastContent.props.children || content.pop();
        }
    },
    clearEmptyArrayItems: function (array) {
        return array.filter(function (item) { return item != null; });
    },
    ensureChildrenIsArray: function (child) {
        if (!Array.isArray(child.props.children))
            child.props.children = [child.props.children];
    },
    transformAst: function (ast) {
        try {
            if (!settings.store.transformCompoundSentence && ast.length > 1) {
                return ast;
            }
            // Filter out sticker links. These are transformed into actual stickers later, so we don't want duplicate links
            if (settings.store.transformStickers) {
                ast = ast.filter(function (node) {
                    var type = node.type, target = node.target;
                    if (type !== "link")
                        return true;
                    if (fakeNitroStickerRegex.test(target))
                        return false;
                    var gifStickerLinkMatch = target.match(fakeNitroGifStickerRegex);
                    var isGifStickerLink = gifStickerLinkMatch && common_1.StickersStore.getStickerById(gifStickerLinkMatch[1]);
                    return !isGifStickerLink;
                });
            }
            if (settings.store.transformEmojis) {
                ast = ast.map(function (node) {
                    var _a, _b, _c;
                    var type = node.type, target = node.target;
                    if (type !== "link")
                        return node;
                    var fakeNitroMatch = target.match(fakeNitroEmojiRegex);
                    if (!fakeNitroMatch)
                        return node;
                    var url = null;
                    try {
                        url = new URL(target);
                    }
                    catch (_d) { }
                    var emojiId = fakeNitroMatch[1];
                    var emojiName = (_c = (_b = (_a = common_1.EmojiStore.getCustomEmojiById(emojiId)) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : url === null || url === void 0 ? void 0 : url.searchParams.get("name")) !== null && _c !== void 0 ? _c : "FakeNitroEmoji";
                    var animated = fakeNitroMatch[2] === "gif" || (url === null || url === void 0 ? void 0 : url.searchParams.get("animated")) === "true";
                    return {
                        animated: animated,
                        emojiId: emojiId,
                        name: ":".concat(emojiName, ":"),
                        type: "customEmoji",
                        fake: true
                    };
                });
            }
        }
        catch (e) {
            logger.error("Error transforming AST:", e);
        }
        return ast;
    },
    patchFakeNitroStickers: function (stickers, message) {
        var _a, _b, _c, _d, _e;
        var itemsToMaybePush = [];
        var contentItems = message.content.split(/\s/);
        if (settings.store.transformCompoundSentence)
            itemsToMaybePush.push.apply(itemsToMaybePush, contentItems);
        else if (contentItems.length === 1)
            itemsToMaybePush.push(contentItems[0]);
        itemsToMaybePush.push.apply(itemsToMaybePush, message.attachments.filter(function (attachment) { return attachment.content_type === "image/gif"; }).map(function (attachment) { return attachment.url; }));
        for (var _i = 0, itemsToMaybePush_1 = itemsToMaybePush; _i < itemsToMaybePush_1.length; _i++) {
            var item = itemsToMaybePush_1[_i];
            if (!settings.store.transformCompoundSentence && !item.startsWith("http") && !hyperLinkRegex.test(item))
                continue;
            var imgMatch = item.match(fakeNitroStickerRegex);
            if (imgMatch) {
                var url = null;
                try {
                    url = new URL(item);
                }
                catch (_f) { }
                var stickerName = (_c = (_b = (_a = common_1.StickersStore.getStickerById(imgMatch[1])) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : url === null || url === void 0 ? void 0 : url.searchParams.get("name")) !== null && _c !== void 0 ? _c : "FakeNitroSticker";
                stickers.push({
                    format_type: 1,
                    id: imgMatch[1],
                    name: stickerName,
                    fake: true
                });
                continue;
            }
            var gifMatch = item.match(fakeNitroGifStickerRegex);
            if (gifMatch) {
                if (!common_1.StickersStore.getStickerById(gifMatch[1]))
                    continue;
                var stickerName = (_e = (_d = common_1.StickersStore.getStickerById(gifMatch[1])) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : "FakeNitroSticker";
                stickers.push({
                    format_type: 2,
                    id: gifMatch[1],
                    name: stickerName,
                    fake: true
                });
            }
        }
        return stickers;
    },
    shouldIgnoreEmbed: function (embed, message) {
        var _a, _b;
        try {
            var contentItems = message.content.split(/\s/);
            if (contentItems.length > 1 && !settings.store.transformCompoundSentence)
                return false;
            switch (embed.type) {
                case "image": {
                    var url_1 = (_a = embed.url) !== null && _a !== void 0 ? _a : (_b = embed.image) === null || _b === void 0 ? void 0 : _b.url;
                    if (!url_1)
                        return false;
                    if (!settings.store.transformCompoundSentence
                        && !contentItems.some(function (item) { var _a; return item === url_1 || ((_a = item.match(hyperLinkRegex)) === null || _a === void 0 ? void 0 : _a[1]) === url_1; }))
                        return false;
                    if (settings.store.transformEmojis) {
                        if (fakeNitroEmojiRegex.test(url_1))
                            return true;
                    }
                    if (settings.store.transformStickers) {
                        if (fakeNitroStickerRegex.test(url_1))
                            return true;
                        var gifMatch = url_1.match(fakeNitroGifStickerRegex);
                        if (gifMatch) {
                            // There is no way to differentiate a regular gif attachment from a fake nitro animated sticker, so we check if the StickersStore contains the id of the fake sticker
                            if (common_1.StickersStore.getStickerById(gifMatch[1]))
                                return true;
                        }
                    }
                    break;
                }
            }
        }
        catch (e) {
            new Logger_1.Logger("FakeNitro").error("Error in shouldIgnoreEmbed:", e);
        }
        return false;
    },
    filterAttachments: function (attachments) {
        return attachments.filter(function (attachment) {
            if (attachment.content_type !== "image/gif")
                return true;
            var match = attachment.url.match(fakeNitroGifStickerRegex);
            if (match) {
                // There is no way to differentiate a regular gif attachment from a fake nitro animated sticker, so we check if the StickersStore contains the id of the fake sticker
                if (common_1.StickersStore.getStickerById(match[1]))
                    return false;
            }
            return true;
        });
    },
    addFakeNotice: function (type, node, fake) {
        if (!fake)
            return node;
        node = Array.isArray(node) ? node : [node];
        switch (type) {
            case FakeNoticeType.Sticker: {
                node.push(" This is a FakeNitro sticker and renders like a real sticker only for you. Appears as a link to non-plugin users.");
                return node;
            }
            case FakeNoticeType.Emoji: {
                node.push(" This is a FakeNitro emoji and renders like a real emoji only for you. Appears as a link to non-plugin users.");
                return node;
            }
        }
    },
    getStickerLink: function (_a) {
        var format_type = _a.format_type, id = _a.id;
        var ext = format_type === enums_1.StickerFormatType.GIF ? "gif" : "png";
        return "https://media.discordapp.net/stickers/".concat(id, ".").concat(ext, "?size=").concat(settings.store.stickerSize);
    },
    sendAnimatedSticker: function (stickerLink, stickerId, channelId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var _b, frames, width, height, gif, resolution, canvas, ctx, scale, previousFrameData, _i, frames_1, frame, left, top, width_1, height_1, img, delay, blendOp, disposeOp, data, palette, index, file;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, fetch(stickerLink)
                            .then(function (res) { return res.arrayBuffer(); })
                            .then(apng_1.parseAPNG)];
                    case 1:
                        _b = _c.sent(), frames = _b.frames, width = _b.width, height = _b.height;
                        gif = (0, gifenc_1.GIFEncoder)();
                        resolution = (_a = settings.store.stickerSize) !== null && _a !== void 0 ? _a : DEFAULT_STICKER_SIZE;
                        canvas = document.createElement("canvas");
                        canvas.width = resolution;
                        canvas.height = resolution;
                        ctx = canvas.getContext("2d", {
                            willReadFrequently: true
                        });
                        scale = resolution / Math.max(width, height);
                        ctx.scale(scale, scale);
                        for (_i = 0, frames_1 = frames; _i < frames_1.length; _i++) {
                            frame = frames_1[_i];
                            left = frame.left, top = frame.top, width_1 = frame.width, height_1 = frame.height, img = frame.img, delay = frame.delay, blendOp = frame.blendOp, disposeOp = frame.disposeOp;
                            previousFrameData = ctx.getImageData(left, top, width_1, height_1);
                            if (blendOp === apng_1.ApngBlendOp.SOURCE) {
                                ctx.clearRect(left, top, width_1, height_1);
                            }
                            ctx.drawImage(img, left, top, width_1, height_1);
                            data = ctx.getImageData(0, 0, resolution, resolution).data;
                            palette = (0, gifenc_1.quantize)(data, 256);
                            index = (0, gifenc_1.applyPalette)(data, palette);
                            gif.writeFrame(index, resolution, resolution, {
                                transparent: true,
                                palette: palette,
                                delay: delay
                            });
                            if (disposeOp === apng_1.ApngDisposeOp.BACKGROUND) {
                                ctx.clearRect(left, top, width_1, height_1);
                            }
                            else if (disposeOp === apng_1.ApngDisposeOp.PREVIOUS) {
                                ctx.putImageData(previousFrameData, left, top);
                            }
                        }
                        gif.finish();
                        file = new File([gif.bytesView()], "".concat(stickerId, ".gif"), { type: "image/gif" });
                        common_1.UploadHandler.promptToUpload([file], common_1.ChannelStore.getChannel(channelId), common_1.DraftType.ChannelMessage);
                        return [2 /*return*/];
                }
            });
        });
    },
    canUseEmote: function (e, channelId) {
        var _a, _b;
        if (e.type === 0)
            return true;
        if (e.available === false)
            return false;
        if (isUnusableRoleSubscriptionEmoji(e, this.guildId, true))
            return false;
        var isUsableTwitchSubEmote = false;
        if (e.managed && e.guildId) {
            var myRoles_1 = (_b = (_a = common_1.GuildMemberStore.getSelfMember(e.guildId)) === null || _a === void 0 ? void 0 : _a.roles) !== null && _b !== void 0 ? _b : [];
            isUsableTwitchSubEmote = e.roles.some(function (r) { return myRoles_1.includes(r); });
        }
        if (this.canUseEmotes || isUsableTwitchSubEmote)
            return e.guildId === this.guildId || hasExternalEmojiPerms(channelId);
        else
            return !e.animated && e.guildId === this.guildId;
    },
    start: function () {
        var _this = this;
        var s = settings.store;
        if (!s.enableEmojiBypass && !s.enableStickerBypass) {
            return;
        }
        this.preSend = (0, MessageEvents_1.addMessagePreSendListener)(function (channelId, messageObj, options) { return __awaiter(_this, void 0, void 0, function () {
            var guildId, hasBypass, sticker, canUseStickers, link;
            var _a;
            return __generator(this, function (_b) {
                guildId = this.guildId;
                hasBypass = false;
                stickerBypass: {
                    if (!s.enableStickerBypass)
                        break stickerBypass;
                    sticker = common_1.StickersStore.getStickerById((_a = options.stickerIds) === null || _a === void 0 ? void 0 : _a[0]);
                    if (!sticker)
                        break stickerBypass;
                    // Discord Stickers are now free yayyy!! :D
                    if ("pack_id" in sticker)
                        break stickerBypass;
                    canUseStickers = this.canUseStickers && hasExternalStickerPerms(channelId);
                    if (sticker.available !== false && (canUseStickers || sticker.guild_id === guildId))
                        break stickerBypass;
                    link = this.getStickerLink(sticker);
                    if (sticker.format_type === enums_1.StickerFormatType.APNG) {
                        if (!hasAttachmentPerms(channelId)) {
                            (0, common_1.openModal)(function (props) { return (__assign({}, props)); }, title = "Hold on!", confirmText = "OK", variant = "primary"
                                >
                                    You, cannot, send, this, message, because, it, contains, an, animated, FakeNitro, sticker, and, you);
                            do
                                not;
                            while (have);
                            permissions;
                            to;
                            attach;
                            files in the;
                            current;
                            channel.Please;
                            remove;
                            the;
                            sticker;
                            to;
                            proceed.
                                < /Forms.FormText>
                                < /div>
                                < /ConfirmModal>;
                        }
                    }
                }
                return [2 /*return*/];
            });
        }); });
    }
});
{
    this.sendAnimatedSticker(link, sticker.id, channelId);
}
return { cancel: true };
{
    hasBypass = true;
    var url = new URL(link);
    url.searchParams.set("name", sticker.name);
    url.searchParams.set("lossless", "true");
    var linkText = s.hyperLinkText.replaceAll("{{NAME}}", sticker.name);
    messageObj.content += "".concat(getWordBoundary(messageObj.content, messageObj.content.length - 1)).concat(s.useHyperLinks ? "[".concat(linkText, "](").concat(url, ")") : url);
    options.stickerIds.length = 0;
}
if (s.enableEmojiBypass) {
    var _loop_1 = function (emoji) {
        if (this_1.canUseEmote(emoji, channelId))
            return "continue";
        hasBypass = true;
        var emojiSize = (_a = s.emojiSize) !== null && _a !== void 0 ? _a : DEFAULT_EMOJI_SIZE;
        var emojiString = "<".concat(emoji.animated ? "a" : "", ":").concat(emoji.originalName || emoji.name, ":").concat(emoji.id, ">");
        var url = new URL(common_1.IconUtils.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: emojiSize }));
        url.searchParams.set("size", emojiSize.toString());
        url.searchParams.set("name", emoji.name);
        url.searchParams.set("lossless", "true");
        var linkText = s.hyperLinkText.replaceAll("{{NAME}}", emoji.name);
        messageObj.content = messageObj.content.replace(emojiString, function (match, offset, origStr) {
            return "".concat(getWordBoundary(origStr, offset - 1)).concat(s.useHyperLinks ? "[".concat(linkText, "](").concat(url, ")") : url).concat(getWordBoundary(origStr, offset + match.length));
        });
    };
    var this_1 = this;
    for (var _i = 0, _b = messageObj.validNonShortcutEmojis; _i < _b.length; _i++) {
        var emoji = _b[_i];
        _loop_1(emoji);
    }
}
if (hasBypass && !s.disableEmbedPermissionCheck && !hasEmbedPerms(channelId)) {
    if (!await showCannotEmbedNotice()) {
        return { cancel: true };
    }
}
return { cancel: false };
;
this.preEdit = (0, MessageEvents_1.addMessagePreEditListener)(function (channelId, __, messageObj) { return __awaiter(void 0, void 0, void 0, function () {
    var hasBypass;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!s.enableEmojiBypass)
                    return [2 /*return*/];
                hasBypass = false;
                messageObj.content = messageObj.content.replace(/(?<!\\)<a?:(?:\w+):(\d+)>/ig, function (emojiStr, emojiId, offset, origStr) {
                    var _a;
                    var emoji = common_1.EmojiStore.getCustomEmojiById(emojiId);
                    if (emoji == null)
                        return emojiStr;
                    if (_this.canUseEmote(emoji, channelId))
                        return emojiStr;
                    hasBypass = true;
                    var emojiSize = (_a = s.emojiSize) !== null && _a !== void 0 ? _a : DEFAULT_EMOJI_SIZE;
                    var url = new URL(common_1.IconUtils.getEmojiURL({ id: emoji.id, animated: emoji.animated, size: emojiSize }));
                    url.searchParams.set("size", emojiSize.toString());
                    url.searchParams.set("name", emoji.name);
                    url.searchParams.set("lossless", "true");
                    var linkText = s.hyperLinkText.replaceAll("{{NAME}}", emoji.name);
                    return "".concat(getWordBoundary(origStr, offset - 1)).concat(s.useHyperLinks ? "[".concat(linkText, "](").concat(url, ")") : url).concat(getWordBoundary(origStr, offset + emojiStr.length));
                });
                if (!(hasBypass && !s.disableEmbedPermissionCheck && !hasEmbedPerms(channelId))) return [3 /*break*/, 2];
                return [4 /*yield*/, showCannotEmbedNotice()];
            case 1:
                if (!(_a.sent())) {
                    return [2 /*return*/, { cancel: true }];
                }
                _a.label = 2;
            case 2: return [2 /*return*/, { cancel: false }];
        }
    });
}); });
stop();
{
    (0, MessageEvents_1.removeMessagePreSendListener)(this.preSend);
    (0, MessageEvents_1.removeMessagePreEditListener)(this.preEdit);
}
;
