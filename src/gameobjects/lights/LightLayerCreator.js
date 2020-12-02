/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var BuildGameObject = require('../BuildGameObject');
var LightLayer = require('./LightLayer');
var GameObjectCreator = require('../GameObjectCreator');
var GetAdvancedValue = require('../../utils/object/GetAdvancedValue');

/**
 * Creates a new Light Layer Game Object and returns it.
 *
 * Note: This method will only be available if the Light Layer Game Object has been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectCreator#lightLayer
 * @since 3.50.0
 *
 * @param {object} config - The configuration object this Game Object will use to create itself.
 * @param {boolean} [addToScene] - Add this Game Object to the Scene after creating it? If set this argument overrides the `add` property in the config object.
 *
 * @return {Phaser.GameObjects.LightLayer} The Game Object that was created.
 */
GameObjectCreator.register('lightLayer', function (config, addToScene)
{
    if (config === undefined) { config = {}; }

    var children = GetAdvancedValue(config, 'children', null);

    var layer = new LightLayer(this.scene, children);

    if (addToScene !== undefined)
    {
        config.add = addToScene;
    }

    BuildGameObject(this.scene, layer, config);

    return layer;
});