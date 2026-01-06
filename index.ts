/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";

const substitutes: { [key: string]: string[] } = {
        "a": ["а", "𝖺"],				"A": ["Α", "А", "𐊠", "𖽀"],
        "b": ["ᖯ", "𝖻"],				"B": ["Β", "В", "ꓐ", "𐊂", "𝖡"],
        "c": ["с", "c", "ᴄ"],			"C": ["Ϲ", "С", "Ꮯ"],
        "d": ["ԁ","ⅾ","𝖽"],			    "D": ["Ꭰ", "ᗞ", "Ⅾ", "ꓓ", "𝖣"],
        "e": ["е", "𝘦"],				"E": ["Ε", "Е", "ⴹ", "𐊆"],
        "f": ["ẝ", "ꬵ", "𝖿"],			"F": ["ᖴ", "ꓝ", "𐊇", "𝖥"],
        "g": ["ɡ", "𝗀"],				"G": ["Ԍ", "Ꮐ", "ꓖ", "𝖦"],
        "h": ["h", "һ", "հ"],			"H": ["Η", "Н", "ꓧ","𐋏"],
        "i": ["і", "Ꭵ"],				"I": ["Ι","І"],
        "j": ["ϳ", "ј"],				"J": ["Ј", "Ꭻ", "ᒍ"],
        "k": ["𝗄"],					    "K": ["Κ", "К", "K", "ꓗ"],
        "l": ["l", "ǀ"],				"L": ["Ꮮ", "ᒪ", "Ⅼ", "Ⳑ"],
        "m": ["ⅿ", "𝗆"],			    "M": ["Μ", "М", "Ⅿ","Ｍ"],
        "n": ["ո"],					    "N": ["Ν", "ꓠ", "𝖭"],
        "o": ["o", "ο", "о"],			"O": ["O", "Ο", "О", "Օ"],
        "p": ["р", "𝗉"],				"P": ["Ρ", "Р", "ꓑ", "𐊕"],
        "q": ["ԛ", "𝗊"],				"Q": ["𝖰", "𝘘"],
        "r": ["ꭇ","𝗋"],					"R": ["ꓣ", "𖼵", "𝈖"],
        "s": ["ѕ", "ꜱ", "𝗌"],			"S": ["Ꮪ", "ꓢ", "𖼺"],
        "t": ["𝗍"],					    "T": ["𐊗", "𐊱", "𑢼"],
        "u": ["υ", "ᴜ"],				"U": ["Ս", "ꓴ", "𐓎", "𖽂"],
        "v": ["ν", "ᴠ", "𝗏"],			"V": ["ꓦ", "ꛟ", "𑢠"],
        "w": ["ԝ", "ᴡ", "ꮃ", "𝗐"],	    "W": ["ꓪ", "𝖶", "Ԝ"],
        "x": ["х", "ⅹ", "𝗑"],			"X": ["᙭", "Ⅹ"],
        "y": ["γ", "𝗒"],				"Y": ["Υ", "ϒ", "Ү"],
        "z": ["ᴢ", "ꮓ", "𝗓"],			"Z": ["Ꮓ", "ꓜ", "𑢩"]
};

function obfuscate(inputText: string): string {
    const parts = inputText.split(/(\b(?:https?:\/\/)?[^\s]+\.[^\s]{2,}\b)/gi);
    return parts
        .map((p, i) => i % 2 === 1 ? p :
            p.replace(/[a-z]/gi, c => {
                const lower = c;
                const substitutesForChar = substitutes[lower];

                if (!substitutesForChar) return c;

                const r = substitutesForChar[Math.floor(Math.random() * substitutesForChar.length)];
                return c === lower ? r : r.toUpperCase();
            })
        )
        .join('');
}

export default definePlugin({
    name: "obfuscate",
    description: "replace english characters in messages with unicode look-alikes",
    authors: [{name: "antivoiddd", id: 758137339829682227}],
    dependencies: ["MessageEventsAPI"],

    onBeforeMessageSend: (_, msg) => {
        msg.content = obfuscate(msg.content);
    },
});

