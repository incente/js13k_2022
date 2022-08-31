/** @format */

var soundRifle = new Sound([3, , 164.8138, , , , 4, , , , , , , , , -0.3]);

class Rifle extends Gun {
	constructor(pos) {
		super(pos, g_game.tileNumbers.rifle);
		// your object init code here
		this._distance = 0.3;
		this._speed = 0.5;

		this._maxAmmo = 1;
		this._ammoIconTile = g_game.tileNumbers.rifleAmmoIcon;

		this.ammo = this._maxAmmo;
		this.reloadTimePerBullet = 2;

		this._soundFire = soundRifle;
	}

	fire() {
		if (super.fire(g_game.colorBulletCasing)) {
			const penetration = 12;

			let bullet = new Bullet(this.pos.copy(), 0, g_game.colorRifleRound, 40, penetration);
			bullet.velocity.x = Math.cos(-this.angle) * this._speed;
			bullet.velocity.y = Math.sin(-this.angle) * this._speed;
		}
		return true;
	}
}
