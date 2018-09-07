$_mod.def("/marko$4.13.4/src/runtime/vdom/VFragment", function(require, exports, module, __filename, __dirname) { var VNode = require('/marko$4.13.4/src/runtime/vdom/VNode'/*"./VNode"*/);
var inherit = require('/raptor-util$3.2.0/inherit'/*"raptor-util/inherit"*/);
var createFragmentNode = require('/marko$4.13.4/src/morphdom/fragment'/*"../../morphdom/fragment"*/)
    .___createFragmentNode;

function VFragment(key, ownerComponent, preserve) {
    this.___VNode(null /* childCount */);
    this.___key = key;
    this.___ownerComponent = ownerComponent;
    this.___preserve = preserve;
}

VFragment.prototype = {
    ___nodeType: 12,
    ___actualize: function() {
        var fragment = createFragmentNode();
        fragment.___markoKey = this.___key;
        fragment.___markoVElement = this;
        return fragment;
    }
};

inherit(VFragment, VNode);

module.exports = VFragment;

});