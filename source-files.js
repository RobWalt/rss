var sourcesIndex = JSON.parse('{\
"atom_syndication":["",[["extension",[],["mod.rs","util.rs"]]],["category.rs","content.rs","entry.rs","error.rs","feed.rs","fromxml.rs","generator.rs","lib.rs","link.rs","person.rs","source.rs","text.rs","toxml.rs","util.rs"]],\
"cfg_if":["",[],["lib.rs"]],\
"chrono":["",[["datetime",[],["mod.rs"]],["format",[],["mod.rs","parse.rs","parsed.rs","scan.rs","strftime.rs"]],["naive",[["datetime",[],["mod.rs"]],["time",[],["mod.rs"]]],["date.rs","internals.rs","isoweek.rs","mod.rs"]],["offset",[],["fixed.rs","mod.rs","utc.rs"]]],["date.rs","lib.rs","month.rs","oldtime.rs","round.rs","traits.rs","weekday.rs"]],\
"darling":["",[],["lib.rs","macros_public.rs"]],\
"darling_core":["",[["ast",[],["data.rs","generics.rs","mod.rs"]],["codegen",[],["attr_extractor.rs","default_expr.rs","error.rs","field.rs","from_attributes_impl.rs","from_derive_impl.rs","from_field.rs","from_meta_impl.rs","from_type_param.rs","from_variant_impl.rs","mod.rs","outer_from_impl.rs","postfix_transform.rs","trait_impl.rs","variant.rs","variant_data.rs"]],["error",[],["kind.rs","mod.rs"]],["options",[],["core.rs","forward_attrs.rs","from_attributes.rs","from_derive.rs","from_field.rs","from_meta.rs","from_type_param.rs","from_variant.rs","input_field.rs","input_variant.rs","mod.rs","outer_from.rs","shape.rs"]],["usage",[],["generics_ext.rs","ident_set.rs","lifetimes.rs","mod.rs","options.rs","type_params.rs"]],["util",[],["flag.rs","ident_string.rs","ignored.rs","mod.rs","over_ride.rs","parse_attribute.rs","path_list.rs","path_to_string.rs","shape.rs","spanned_value.rs","with_original.rs"]]],["derive.rs","from_attributes.rs","from_derive_input.rs","from_field.rs","from_generic_param.rs","from_generics.rs","from_meta.rs","from_type_param.rs","from_variant.rs","lib.rs","macros_private.rs","macros_public.rs"]],\
"darling_macro":["",[],["lib.rs"]],\
"derive_builder":["",[],["error.rs","lib.rs"]],\
"derive_builder_core":["",[["macro_options",[],["darling_opts.rs","mod.rs"]]],["block.rs","build_method.rs","builder.rs","builder_field.rs","change_span.rs","default_expression.rs","deprecation_notes.rs","doc_comment.rs","initializer.rs","lib.rs","options.rs","setter.rs"]],\
"derive_builder_macro":["",[],["lib.rs"]],\
"diligent_date_parser":["",[],["lib.rs"]],\
"encoding_rs":["",[],["ascii.rs","big5.rs","data.rs","euc_jp.rs","euc_kr.rs","gb18030.rs","handles.rs","iso_2022_jp.rs","lib.rs","macros.rs","mem.rs","replacement.rs","shift_jis.rs","single_byte.rs","utf_16.rs","utf_8.rs","variant.rs","x_user_defined.rs"]],\
"fnv":["",[],["lib.rs"]],\
"form_urlencoded":["",[],["lib.rs"]],\
"ident_case":["",[],["lib.rs"]],\
"idna":["",[],["lib.rs","punycode.rs","uts46.rs"]],\
"memchr":["",[["memchr",[["x86",[],["avx.rs","mod.rs","sse2.rs"]]],["fallback.rs","iter.rs","mod.rs","naive.rs"]],["memmem",[["prefilter",[["x86",[],["avx.rs","mod.rs","sse.rs"]]],["fallback.rs","genericsimd.rs","mod.rs"]],["x86",[],["avx.rs","mod.rs","sse.rs"]]],["byte_frequencies.rs","genericsimd.rs","mod.rs","rabinkarp.rs","rarebytes.rs","twoway.rs","util.rs","vector.rs"]]],["cow.rs","lib.rs"]],\
"mime":["",[],["lib.rs","parse.rs"]],\
"never":["",[],["lib.rs"]],\
"num_integer":["",[],["average.rs","lib.rs","roots.rs"]],\
"num_traits":["",[["ops",[],["checked.rs","euclid.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]]],["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","sign.rs"]],\
"percent_encoding":["",[],["lib.rs"]],\
"proc_macro2":["",[],["detection.rs","extra.rs","fallback.rs","lib.rs","marker.rs","parse.rs","rcvec.rs","wrapper.rs"]],\
"quick_xml":["",[["events",[],["attributes.rs","mod.rs"]],["reader",[],["buffered_reader.rs","mod.rs","ns_reader.rs","parser.rs","slice_reader.rs"]]],["encoding.rs","errors.rs","escapei.rs","lib.rs","name.rs","utils.rs","writer.rs"]],\
"quote":["",[],["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]],\
"rss":["",[["extension",[["itunes",[],["itunes_category.rs","itunes_channel_extension.rs","itunes_item_extension.rs","itunes_owner.rs","mod.rs"]]],["dublincore.rs","mod.rs","syndication.rs","util.rs"]]],["category.rs","channel.rs","cloud.rs","enclosure.rs","error.rs","guid.rs","image.rs","item.rs","lib.rs","source.rs","textinput.rs","toxml.rs","util.rs","validation.rs"]],\
"serde":["",[["de",[],["format.rs","ignored_any.rs","impls.rs","mod.rs","seed.rs","utf8.rs","value.rs"]],["private",[],["de.rs","doc.rs","mod.rs","ser.rs","size_hint.rs"]],["ser",[],["fmt.rs","impls.rs","impossible.rs","mod.rs"]]],["integer128.rs","lib.rs","macros.rs"]],\
"serde_derive":["",[["internals",[],["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","receiver.rs","respan.rs","symbol.rs"]]],["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","this.rs","try.rs"]],\
"strsim":["",[],["lib.rs"]],\
"tinyvec":["",[["array",[],["generated_impl.rs"]]],["array.rs","arrayvec.rs","arrayvec_drain.rs","lib.rs","slicevec.rs","tinyvec.rs"]],\
"tinyvec_macros":["",[],["lib.rs"]],\
"unicode_bidi":["",[["char_data",[],["mod.rs","tables.rs"]]],["data_source.rs","deprecated.rs","explicit.rs","format_chars.rs","implicit.rs","level.rs","lib.rs","prepare.rs"]],\
"unicode_ident":["",[],["lib.rs","tables.rs"]],\
"unicode_normalization":["",[],["__test_api.rs","decompose.rs","lib.rs","lookups.rs","no_std_prelude.rs","normalize.rs","perfect_hash.rs","quick_check.rs","recompose.rs","replace.rs","stream_safe.rs","tables.rs"]],\
"url":["",[],["host.rs","lib.rs","origin.rs","parser.rs","path_segments.rs","quirks.rs","slicing.rs"]]\
}');
createSourceSidebar();
